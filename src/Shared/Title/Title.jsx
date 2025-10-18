import style from "./title.module.css";
export const Title = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>;
};
