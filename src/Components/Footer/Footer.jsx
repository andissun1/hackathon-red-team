import style from "./footer.module.css";

export const Footer = (props) => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div>Сайт создан на хакатоне 2025</div>
        <div>Над сайтом работали: Андрей, Илья, Мария</div>
      </div>
    </footer>
  );
};
