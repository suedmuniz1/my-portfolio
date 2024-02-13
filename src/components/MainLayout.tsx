import { Outlet } from "react-router";
import Header from "./Header/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
