import { i18n } from "@/config/i18n";

export const flag = {
  "en-US": "🇺🇸",
  "pt-BR": "🇧🇷",
};

export type FlagKey = keyof typeof flag;

export const locales = i18n.locales.map((code) => {
  return { code, ico: flag[code as FlagKey] };
});
