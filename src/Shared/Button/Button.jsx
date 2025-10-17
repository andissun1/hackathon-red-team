import style from "./button.module.css";
export const Button = ({ children, rounded = "rounded" }) => {
  return (
    <button
      className={`${style.button} ${style[rounded] ? style[rounded] : ""}`}
    >
      {children}
    </button>
  );
};
