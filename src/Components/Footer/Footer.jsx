import { Link } from "react-router-dom";
import style from "./footer.module.css";

export const Footer = () => {
  const teamMembers = [
    { id: "02", name: "Андрей" },
    { id: "03", name: "Илья" },
    { id: "01", name: "Мария" },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div>Сайт создан на хакатоне 2025</div>
        <div>
          Над сайтом работали:{" "}
          {teamMembers.map((member, index) => (
            <span key={member.id}>
              <Link className={style.link} to={`/profile/${member.id}`}>
                {member.name}
              </Link>
              {index < teamMembers.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
