import "./styles.css";
import HeaderClient from "../../componentes/HeaderClient";
import SearchBar from "../../componentes/SeachBar";
import CatalogCard from "../../componentes/CatalogCard";
import ButtomNextPage from "../../componentes/ButtomNextPage";


export default function Catalog() {
  return (
    <>
      <HeaderClient />

      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar/>

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
          </div>

          <ButtomNextPage/>
        </section>
      </main>
    </>
  );
}
