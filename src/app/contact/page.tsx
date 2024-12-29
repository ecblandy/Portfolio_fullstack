"use client";

import dotenv from "dotenv";
dotenv.config();
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
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import { emailFromMe, emailFromUser } from "../../components/emailSend";
export interface FormField {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "71 99402-7893",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "devblandy@hotmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Endereço",
    description: "Salvador - BA",
  },
];

export default function Contact() {
  const formValues = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  };
  const [values, setValues] = useState<FormField>(formValues);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Extrai o "name" (nome do campo) e o "value" (valor digitado) do campo atual.
    const { name, value } = event.target;

    // -> "prevState" é o estado anterior do formulário.
    // Usa o operador de espalhamento ("...prevState") para preservar os campos já existentes no estado.
    // Atualiza apenas o campo correspondente ao "name" com o valor atual digitado ("value"). EX: email: asuhashuahs@mail.com

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailFromMe(values);
    emailFromUser(values);
  };

  const handleSelectChange = (value: string) => {
    // Atualiza o estado 'service' com o valor selecionado
    setValues((prevState) => ({
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
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos!</h3>
              <p className="text-white/60 ">
                Se você está interessado(a) em fazer uma parceria, me contratar
                como freelancer ou me oferecer uma vaga de emprego, ficarei
                feliz em conversar! Estou sempre aberto a novas oportunidades e
                desafios.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Nome"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="bg-[#000]/60"
                />
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  className="bg-[#000]/60"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="bg-[#000]/60"
                />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  className="bg-[#000]/60"
                />
              </div>
              {/* select */}
              <Select
                name="service"
                value={values.service}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="selecione o serviço" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione o serviço</SelectLabel>
                    <SelectItem value="Desenvolvedor Web">
                      Desenvolvedor Web
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px] resize-none bg-[#000]/60"
                placeholder="Escreva sua mensagem aqui."
                value={values.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 rounded text-dark-primary"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
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
