"use client";
import dotenv from "dotenv";
dotenv.config();

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

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
import { emailFromMe, emailFromUser } from "../../../components/emailSend";

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

export default function Contact() {
  const { lang }: { lang: Locale } = useParams();
  const dict = getDictionaryUseClient(lang);

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

  // Objeto com os valores iniciais do formulário
  const formValues = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  };

  // Iniciando o estado com os valores iniciais do formulário
  const [fieldValues, setFieldValues] = useState<FormField>(formValues);

  // Capturando mudanças no formulário
  const handleChange: ChangeEventType = (event) => {
    const { name, value } = event.target; // Extrai o "name" (nome do campo) e o "value" (valor digitado) do campo atual.

    setFieldValues((prevState) => ({
      //  "prevState" é o estado anterior do formulário.
      ...prevState, // Usa o operador de espalhamento ("...prevState") para preservar os campos já existentes no estado.
      [name]: value, // Atualiza apenas o campo correspondente ao "name" com o valor atual digitado ("value"). EX: email: asuhashuahs@mail.com
    }));
  };

  // Envio do formulário
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailFromMe(fieldValues);
    emailFromUser(fieldValues);
  };

  // Lidando com a mudança do select
  const handleSelectChange = (value: string) => {
    // Atualiza o estado 'service' com o valor selecionado
    setFieldValues((prevState) => ({
      ...prevState,
      service: value,
    }));
  };

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
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">{dict.contact.title}</h3>
              <p className="text-white/60 ">{dict.contact.description}</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder={dict.contact.form.name}
                  name="name"
                  value={fieldValues.name}
                  onChange={handleChange}
                  className="bg-[#000]/60"
                />
                <Input
                  type="text"
                  placeholder={dict.contact.form.lastName}
                  name="lastName"
                  value={fieldValues.lastName}
                  onChange={handleChange}
                  className="bg-[#000]/60"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={fieldValues.email}
                  onChange={handleChange}
                  className="bg-[#000]/60"
                />
                <Input
                  type="tel"
                  placeholder={dict.contact.form.phone}
                  name="phone"
                  onChange={handleChange}
                  value={fieldValues.phone}
                  className="bg-[#000]/60"
                />
              </div>
              {/* select */}
              <Select
                name="service"
                value={fieldValues.service}
                onValueChange={handleSelectChange}
              >
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
                name="message"
                className="h-[200px] resize-none bg-[#000]/60"
                placeholder="Escreva sua mensagem aqui."
                value={fieldValues.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 rounded text-dark-primary"
              >
                {dict.contact.form.button}
              </Button>
            </form>
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
