import { Outlet } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import style from "./mainLayout.module.css";
export const MainLayout = (props) => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
