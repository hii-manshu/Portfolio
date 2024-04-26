import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import "animate.css";
import Navbar from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { ModeToggle } from "@/components/mode-toggler";

export const metadata = {
  title: "Himanshu Sharma",
  description: "Himanshu Sharma Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="fixed"
            style={{
              zIndex: "99 !important",
              top: "50%",
              right: "0%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <ModeToggle />
          </div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
