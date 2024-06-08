"use client";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./Header/header";
import Footer from "./Footer/footer";
import { TracingBeam } from "./ui/tracing-beam";
import TawkToWidget from "@/tawk-to-widget";

function MainLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TawkToWidget />
      {/* <TracingBeam> */}
      <Navbar />
      {children}
      <Footer />
      {/* </TracingBeam> */}
    </ThemeProvider>
  );
}

export default MainLayout;
