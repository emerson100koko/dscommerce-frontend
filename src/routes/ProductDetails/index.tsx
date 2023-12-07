import './styles.css';
import ButtonInverse from "../../componentes/ButtomInverse";
import ButtonPrimary from "../../componentes/ButtomPrimary";
import HeaderClient from "../../componentes/HeaderClient";
import ProductDetailsCard from "../../componentes/ProductDetailsCard";
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta tv e muito bonita",
  imgUrl: "duans",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletronicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Importados"
    }
  ]
}

export function ProductDetails() {


    return (
        <>
        <HeaderClient />
         <main>
           <section id="product-details-section" className="dsc-container">
             <ProductDetailsCard product={product} />
             <div className="dsc-btn-page-container">
               <ButtonPrimary/>
               <ButtonInverse/>
             </div>
           </section>
         </main>
       </>
    );
}

