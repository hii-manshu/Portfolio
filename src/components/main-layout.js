"use client";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./Header/header";
import Footer from "./Footer/footer";
import TawkToWidget from "@/tawk-to-widget";
import { Snowfall } from "react-snowfall";

function MainLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {/* <Snowfall /> */}
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
