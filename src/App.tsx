import "./App.css";
import computerImg from   './assets/computer.png';
import ButtonInverse from "./componentes/ButtomInverse";
import ButtonPrimary from "./componentes/ButtomPrimary";
import HeaderClient from './componentes/HeaderClient';
import ProductDetailsCard from "./componentes/ProductDetailsCard";

export default function App() {
  return (
    <>
     <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard/>
          <div className="dsc-btn-page-container">
            <ButtonPrimary/>
            <ButtonInverse/>
          </div>
        </section>
      </main>
    </>
  );
}


