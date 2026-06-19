import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "./dictionaries";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export const metadata: Metadata = {
  title: "Wladimir Sanvicente — Full-Stack Developer",
  description:
    "Personal portfolio of Wladimir Sanvicente. Full-Stack Developer with experience in Next.js and other technologies.",
  icons: { icon: "/wladimirLofi.jpg" },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className="antialiased">
      <body className="min-h-screen grid place-items-center">
        {/* <div className="noise-overlay" aria-hidden="true" /> */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
