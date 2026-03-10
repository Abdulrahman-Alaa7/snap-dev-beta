import { Inter as FontSans } from "next/font/google";
import { Cairo } from "next/font/google";
import { cn } from "../../lib/utils";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Header from "../../components/Header";
import { Provider } from "../utils/Provider";
import Footer from "../../components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "../../components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cairo = Cairo({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={`${locale === "ar" ? `rtl` : `ltr`}`}
      suppressHydrationWarning={true}
    >
      <body
        className={cn(
          `${
            locale === "ar" ? `!font-cairo` : `!font-sans`
          } min-h-screen dark:bg-background  antialiased`,
          fontSans.variable,
          cairo.variable,
        )}
        style={
          {
            "--gradient-background-start": "rgb(108, 0, 162)",
            "--gradient-background-end": "rgb(0, 17, 82)",
          } as React.CSSProperties
        }
      >
        <Provider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <NextTopLoader showSpinner={false} />
            {children}
            <Footer />
          </NextIntlClientProvider>
          <Toaster position="top-center" richColors />
        </Provider>
      </body>
    </html>
  );
}
