import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Products from "../components/Products/Products";
import ProductPage from "../pages/ProductPage/ProductPage";
import ServiceDetails from "../pages/ServicesPage/ServicesPage";
import SawProductDetails from "src/components/SawProduct/SawProductDetails/SawProductDetails";
import SawBandPage from "src/pages/SawBandPage/SawBandPage";
import SawBandDetails from "src/components/SawBandList/SawBandCard/SawBandDetails/SawBandDetails";
import SharpeningServicesPage from "src/pages/SharpeningServices/SharpeningServices";

const Routing = ({ refs }: any) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage refs={refs} />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/services/:serviceId" element={<ServiceDetails />} />
      <Route path="/serras-circulares" element={<ProductPage />} />
      <Route path="/serras-circulares/detalhes/:productId" element={<SawProductDetails />} />
      <Route path="/serra-fita" element={<SawBandPage />} />
      <Route path="/serra-fita/detalhes/:productId" element={<SawBandDetails />} />
      <Route path="/servicos-afiação" element={<SharpeningServicesPage />} />
    </Routes>
  );
};

export default Routing;
