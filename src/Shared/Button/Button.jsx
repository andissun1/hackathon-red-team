import style from "./button.module.css";
export const Button = ({ children, rounded = "rounded", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${style.button} ${style[rounded] ? style[rounded] : ""}`}
    >
      {children}
    </button>
  );
};
