"use client";
import dotenv from "dotenv";
dotenv.config();

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Utils
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n";

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
import ErrorDisplay from "@/components/error-display";
// import { emailFromMe, emailFromUser } from "../../../components/emailSend";

// Tipagem dos campos do formulario
export interface FormField {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ChangeEventType {
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

// Cria uma validação com zod
const createEmailSchema = z.object({
  name: z.string().nonempty("O campo não pode ser vazio."),
  lastName: z.string().nonempty("O campo não pode ser vazio."),
  email: z
    .string()
    .nonempty("O campo não pode ser vazio.")
    .email("Formato de email invalido")
    .toLowerCase()
    .regex(
      /@(gmail\.com|hotmail\.com|outlook\.com)$/,
      "Deve terminar com gmail ou hotmail"
    ),
  phone: z.string().nonempty("O campo number não pode ser vazio").min(10),
  service: z.string().nonempty(),
  message: z.string().min(1, "Não pode ser vazio"),
});

type CreateEmailFormData = z.infer<typeof createEmailSchema>;

export default function Contact() {
  const { lang }: { lang: Locale } = useParams();
  const dict = getDictionaryUseClient(lang);

  // Hook para interação com formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEmailFormData>({
    resolver: zodResolver(createEmailSchema),
  });

  // Informações de contato da SIDEBAR
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: dict.contact.sidebar.phone,
      description: "71 99402-7893",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "devblandy@hotmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: dict.contact.sidebar.address,
      description: "Salvador - BA",
    },
  ];

  // const validateForm = () => {
  //   // const data = {
  //   //   name: formValues.name,
  //   //   lastName: formValues.lastName,
  //   //   email: formValues.email,
  //   //   phone: formValues.phone,
  //   //   service: formValues.service,
  //   //   message: formValues.message,
  //   // };
  // };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#3f3e3e] dark:bg-[#232329] rounded-xl"
              onSubmit={handleSubmit((d) => console.log(d))}
            >
              <h3 className="text-4xl text-accent">{dict.contact.title}</h3>
              <p className="text-white/60 ">{dict.contact.description}</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder={dict.contact.form.name}
                  className="bg-[#000]/60"
                  {...register("name")}
                />

                <Input
                  type="text"
                  placeholder={dict.contact.form.lastName}
                  className="bg-[#000]/60"
                  {...register("lastName")}
                />

                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#000]/60"
                  {...register("email")}
                />

                <Input
                  type="number"
                  placeholder={dict.contact.form.phone}
                  className="bg-[#000]/60 no-spinner"
                  maxLength={11}
                  {...register("phone")}
                />
              </div>
              {/* select */}
              <Select {...register("service")}>
                <SelectTrigger className="w-full">
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

              {/* textarea */}
              <Textarea
                className="h-[200px] resize-none bg-[#000]/60"
                placeholder="Escreva sua mensagem aqui."
                {...register("message")}
              />
              <Button
                type="submit"
                size="md"
                className="max-w-40 rounded text-dark-primary"
              >
                {dict.contact.form.button}
              </Button>
            </form>
            {/* error div */}
            <ErrorDisplay errors={errors} />
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#3f3e3e] dark:bg-[#232329] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-dark-primary/60 dark:text-light-primary/60">
                        {item.title}
                      </p>
                      <h3 className="text-xl text-dark-primary dark:text-light-primary">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
