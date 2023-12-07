import "./styles.css";
import cartIcon from "../../assets/cart.svg";
import { useContext, useState } from "react";
import * as cartService from "../../services/cart-service";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {

    const { ContextCartCount } = useContext(ContextCartCount);

  return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />
      {
        ContextCartCount > 0 &&
        <div className="dsc-cart-count">{ContextCartCount}</div>
      }
    </>
  );
}