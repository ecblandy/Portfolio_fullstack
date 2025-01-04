import emailjs from "emailjs-com";

// Utils
import { FormField } from "@/app/[lang]/contact/page";

const serviceId: string = process.env.NEXT_PUBLIC_SERVICE_ID || "";
const myTemplate: string = process.env.NEXT_PUBLIC_MY_TEMPLATE || "";
const userTemplate: string = process.env.NEXT_PUBLIC_USER_TEMPLATE || "";
const publicKey: string = process.env.NEXT_PUBLIC_KEY || "";

// Função que usa o emailjs para enviar o email para meu email
export const emailFromMe = (props: FormField) => {
  // Informações do email com os campos do formulário
  const emailInfo = {
    fullName: `${props.name} ${props.lastName}`,
    email: props.email,
    phone: props.phone,
    message: props.message,
    service: props.service,
  };

  emailjs.send(serviceId, myTemplate, emailInfo, publicKey).then((response) => {
    console.log(response.text, response.status);
  });
};

// Função que usa o emailjs para enviar o email para cliente/parceiro
export const emailFromUser = (props: FormField) => {
  // Informações do email com os campos do formulário
  const emailInfo = {
    fullName: `${props.name} ${props.lastName}`,
    email: props.email,
    phone: props.phone,
    message: props.message,
    service: props.service,
  };

  emailjs
    .send(serviceId, userTemplate, emailInfo, publicKey)
    .then((response) => {
      console.log(response.text, response.status);
    });
};
