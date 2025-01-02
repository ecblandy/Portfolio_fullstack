import emailjs from "emailjs-com";
import { FormField } from "@/app/[lang]/contact/page";
const serviceId: string = process.env.NEXT_PUBLIC_SERVICE_ID || "";
const myTemplate: string = process.env.NEXT_PUBLIC_MY_TEMPLATE || "";
const userTemplate: string = process.env.NEXT_PUBLIC_USER_TEMPLATE || "";
const publicKey: string = process.env.NEXT_PUBLIC_KEY || "";

export const emailFromMe = (props: FormField) => {
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

export const emailFromUser = (props: FormField) => {
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
