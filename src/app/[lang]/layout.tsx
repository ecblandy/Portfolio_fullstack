import "../styles/globals.css";
import { jetBrains } from "@/app/fonts/fonts";
import { ThemeProvider } from "@/providers/theme-provider";

// Components
import Header from "@/components/header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { i18n } from "@/config/i18n";

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export const metadata = {
  title: "Vinícius Blandy",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning={true}>
      <body className={`${jetBrains.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
