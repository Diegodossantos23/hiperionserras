import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/AppBar/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./routes/Routing";
import WhatsAppChatButton from "./components/WhatsAppButton/WhatsAppButton";

import "./App.scss";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import PdfChatButton from "./components/CatalogFloatButton/CatalogFLoatButton";
import theme from "./theme/theme";
import CookieConsent from "./components/CookieConsent/CookieConsent";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
 
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const refs = {
    Inicio: heroRef,
    Sobre: aboutUsRef,
    "Produtos & Serviços": servicesRef,
    Contato: contactRef,
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header scrollToSection={scrollToSection} refs={refs} />
          <Routing refs={refs} />
          <Footer />
          <ScrollToTop />
          <WhatsAppChatButton />
          <PdfChatButton />
          <CookieConsent />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
