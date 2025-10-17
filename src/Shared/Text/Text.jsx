import style from "./text.module.css";

export const Text = ({
  children,
  bottomPadding = "small",
  textSize = "mediumText",
}) => {
  return (
    <div className={`${style.text} ${style[bottomPadding]} ${style[textSize]}`}>
      {children}
    </div>
  );
};
