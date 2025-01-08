"use client";
import dotenv from "dotenv";
dotenv.config();

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
// Utils
import { Locale } from "@/config/i18n";

// Components
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function Contact() {
  const { lang }: { lang: Locale } = useParams();

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
          <ContactForm lang={lang} />

          {/* info */}
          <ContactInfo lang={lang} />
        </div>
      </div>
    </motion.section>
  );
}
