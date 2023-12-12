import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../componentes/HeaderAdmin";

export default function Admin() {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  );
}