import { Inter } from "next/font/google";
import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import "animate.css";
import i18n from "../../next-i18next.config";
import MainLayout from "@/components/main-layout";

export const metadata = {
  manifest: "/manifest.json",
  title: "Himanshu Sharma",
  description: "Himanshu Sharma Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
