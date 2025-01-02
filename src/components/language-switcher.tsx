"use client";

import { useParams, usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import ReactCountryFlag from "react-country-flag";

import { Button } from "./ui/button";

const LanguageSwitcher = () => {
  const pathname = usePathname(); // Tudo que vem depois do dominio
  const { lang } = useParams(); // Dentro do params tem o valor dinamico lang que é a rota principal

  const changeLang = lang == "pt-BR" ? "en-US" : "pt-BR";
  const currentCode = lang == "pt-BR" ? "US" : "BR";

  // Pega o caminho da URL e retorna a URL com o idioma selecionado
  const getPathname = (lng: string) => {
    const pathWithoutLang = pathname.replace(`/${lang}`, "");
    return `/${lng}/${pathWithoutLang}`; // aqui retorno a url com o idioma que foi clicado
  };

  // Redireciona para nova URL com idioma selecionado
  const redirectUrl = () => {
    const newPath = getPathname(changeLang);
    return (window.location.href = newPath);
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size={"menu"}
            variant="outline"
            className="hover:bg-accent"
            onClick={() => redirectUrl()}
          >
            <ReactCountryFlag
              className="rounded-full border-none object-cover text-center text-2xl "
              countryCode={currentCode} // aqui eu passo o codigo do pais para a bandeira
              svg
              title={"Brasil"}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-dark-primary">{changeLang}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LanguageSwitcher;
