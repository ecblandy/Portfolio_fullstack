"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { emailFromMe, emailFromUser } from "./email-sending";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import ErrorDisplay from "./error-display";

// Utils
import { Locale } from "@/config/i18n";
import SpinnerLoading from "./spinner-loading";
import { useState } from "react";
import { playNotificationSound } from "@/lib/sound-notification";

// Tipagem dos campos do formulario
export interface FormField {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type LanguageType = {
  lang: Locale;
};

export default function ContactForm({ lang }: LanguageType) {
  const dict = getDictionaryUseClient(lang);
  const [sendLoading, setSendLoading] = useState(false);
  // const [notification, setNotification] = useState<boolean>(false);

  /// Tipando o dado do email
  type CreateEmailFormData = z.infer<typeof createEmailSchema>;

  // Cria uma validação com zod
  const createEmailSchema = z.object({
    name: z.string().nonempty(dict.formValidate.name),
    lastName: z.string().nonempty(dict.formValidate.lastName),
    email: z
      .string()
      .nonempty(dict.formValidate.email.empty)
      .email(dict.formValidate.email.emailFormat)
      .toLowerCase()
      .regex(
        /@(gmail\.com|hotmail\.com|outlook\.com)$/,
        dict.formValidate.email.regex
      ),

    phone: z
      .string()
      .nonempty(dict.formValidate.phone.empty)
      .min(15, dict.formValidate.phone.format),
    service: z.string().refine(
      (value) => {
        const selectValues = ["web", "mobile", "other", "consulting"];
        return selectValues.includes(value); // Verifica se o valor está entre os valores permitidos
      },
      {
        message: dict.formValidate.service, // Mensagem personalizada de erro
      }
    ),
    message: z.string().nonempty(dict.formValidate.message),
  });

  // Hook para interação com formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
    reset,
  } = useForm<CreateEmailFormData>({
    resolver: zodResolver(createEmailSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // Envio do email
  const sendEmail = async () => {
    playNotificationSound();
    setSendLoading(true);
    console.log(sendLoading);
    const formValues = getValues();
    const dataEmail = {
      name: formValues.name,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      service: formValues.service,
      message: formValues.message,
    };

    try {
      const emailPromise = new Promise(async (resolve, reject) => {
        try {
          const responseUser = await emailFromUser(dataEmail);
          if (responseUser?.status === 200) {
            resolve("E-mail enviado com sucesso!");
          } else {
            reject("Falha ao enviar o e-mail, tente novamente outra hora.");
          }
        } catch (error) {
          reject("Erro ao enviar o e-mail.");
          reset();
          console.error(error);
        }
      });

      // Exibe o toast e toca o som dependendo do estado
      toast.promise(emailPromise, {
        pending: (() => {
          playNotificationSound("/assets/sound/pending.wav"); // Som para envio pendente
          return "Enviando e-mail...";
        })(),
        success: (() => {
          playNotificationSound("/assets/sound/success.wav"); // Som para sucesso
          return "E-mail enviado com sucesso! Por favor, cheque sua caixa de spam.";
        })(),
        error: (() => {
          playNotificationSound("/assets/sound/error.wav"); // Som para erro
          return "Falha ao enviar o e-mail. Tente novamente mais tarde.";
        })(),
      });

      emailPromise.finally(() => {
        setSendLoading(false);
        reset();
      });

      // Continua com o envio do email para o próprio usuário
      emailFromMe(dataEmail);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      toast.error("Erro inesperado ao enviar o e-mail.");
    }
  };

  // Validação, mascara e regex para o input telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length <= 2) {
      value = `(${value}`;
    } else if (value.length <= 7) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
        7,
        11
      )}`;
    }
    return value;
  };

  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form
        className="flex flex-col gap-6 p-10 bg-[#3f3e3e] dark:bg-[#232329] rounded-xl"
        onSubmit={handleSubmit(sendEmail)}
      >
        <h3 className="text-4xl text-accent">{dict.contact.title}</h3>
        <p className="text-white/60 ">{dict.contact.description}</p>
        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            erro={!!errors.name}
            type="text"
            placeholder={dict.contact.form.name}
            className="bg-[#000]/60"
            {...register("name")}
          />

          <Input
            erro={!!errors.lastName}
            type="text"
            placeholder={dict.contact.form.lastName}
            className="bg-[#000]/60"
            {...register("lastName")}
          />

          <Input
            erro={!!errors.email}
            type="email"
            placeholder="Email"
            className="bg-[#000]/60 "
            {...register("email")}
            autoComplete="email"
            defaultValue=""
          />

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                erro={!!errors.phone}
                {...field}
                type="text"
                placeholder={dict.contact.form.phone}
                className="bg-[#000]/60 no-spinner"
                maxLength={15} // Limite de caracteres da máscara
                onChange={(e) => field.onChange(handlePhoneChange(e))}
              />
            )}
          />
        </div>
        {/* select */}
        <Controller
          name="service"
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger erro={!!errors.service} className="w-full">
                  <SelectValue placeholder={dict.contact.form.service.title} />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{dict.contact.form.service.title}</SelectLabel>
                    <SelectItem value="web">
                      {dict.contact.form.service.options.web}
                    </SelectItem>
                    <SelectItem value="mobile">
                      {dict.contact.form.service.options.mobile}
                    </SelectItem>
                    <SelectItem value="consulting">
                      {dict.contact.form.service.options.consulting}
                    </SelectItem>
                    <SelectItem value="other">
                      {dict.contact.form.service.options.other}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            );
          }}
        />
        {/* textarea */}
        <Textarea
          erro={!!errors.lastName}
          className="h-[200px] resize-none bg-[#000]/60"
          placeholder="Escreva sua mensagem aqui."
          {...register("message")}
        />
        <Button
          type="submit"
          size="md"
          className="max-w-40 rounded text-dark-primary cursor-pointer  transition-colors"
        >
          {sendLoading == true ? <SpinnerLoading /> : dict.contact.form.button}
        </Button>
      </form>
      {/* error message */}
      <ErrorDisplay errors={errors} />
    </div>
  );
}
