import { JetBrains_Mono } from "next/font/google";

export const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  preload: false,
});
