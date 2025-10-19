import { Link } from "react-router-dom";
import style from "./header.module.css";
import { Logo } from "../Logo/Logo";
import { Button } from "../../Shared/Button/Button";
import { useTheme } from "../../Theme/useTheme";

export const Header = (props) => {
  const { theme, toggleTheme } = useTheme();
  const routes = [
    {
      name: "Главная",
      link: "/",
    },
    {
      name: "Избранное",
      link: "/favorites",
    },
  ];

  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <Logo />
        <div className={style.linkContainer}>
          {routes.map((el) => (
            <Link className={style.link} key={el.name} to={el.link}>
              {el.name}
            </Link>
          ))}
        </div>
        <Button onClick={toggleTheme}>
          {theme === "light" ? "Темнее" : "Светлее"}
        </Button>
      </div>
    </header>
  );
};
