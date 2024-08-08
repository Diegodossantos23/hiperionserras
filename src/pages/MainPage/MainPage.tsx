import Hero from "../../components/Hero/Hero";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Products from "../../components/Products/Products";
import PartnersAndCustomers from "../../components/PartnersAndCustomers/PartnersAndCustomers";
import ContactForm from "../../components/ContactForm/ContactForm";

function MainPage({ refs }: any) {
  return (
    <div>
      <div ref={refs.Inicio}><Hero /></div>
      <div ref={refs.Sobre}><AboutUs /></div>
      <div ref={refs["Produtos & Serviços"]}><Products /></div>
      <div ref={refs.partnersRef}><PartnersAndCustomers /></div>
      <div ref={refs.servicesRef}><Services /></div>
      <div ref={refs.Contato}><ContactForm /></div>
    </div>
  );
}

export default MainPage;
