import './styles.css';
import ButtonInverse from "../../componentes/ButtomInverse";
import ButtonPrimary from "../../componentes/ButtomPrimary";
import HeaderClient from "../../componentes/HeaderClient";
import ProductDetailsCard from "../../componentes/ProductDetailsCard";

export function ProductDetails() {

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

