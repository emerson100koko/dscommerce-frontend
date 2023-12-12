import { Outlet } from "react-router-dom";
import HeaderClient from "../../componentes/HeaderClient";

export default function ClientHome() {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  );
}