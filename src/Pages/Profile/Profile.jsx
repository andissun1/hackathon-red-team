import { Badge } from "../../Shared/Badge/Badge";
import { ProgressCircle } from "../../Shared/ProgressCircle/ProgressCircle";
import { Text } from "../../Shared/Text/Text";
import { Title } from "../../Shared/Title/Title";
import style from "./profile.module.css";
const testProfile = {
  id: "01",
  name: "Мария",
  surname: "Беззубова",
  age: 29,
  imgURL: "./../../../public/default-photo.jpg",
  skills: { HTML: 100, CSS: 90, JavaScript: 80, React: 60 },
  social: { VK: "https://vk.com/id136169881" },
  about:
    "Занимаюсь программированием, так же в свободное время люблю позаниматься спортом, танцами, чтение",
  badges: [
    { text: "Разработчик", color: "dark" },
    { text: "Верстка", color: "light" },
  ],
  other:
    "Я принимала участие в создании стилей для компонентов внутри данного проекта. Это был интересный опыт, надеюсь он приведет к чему-то большему",
};
export const Profile = ({ profile = testProfile }) => {
  return (
    <>
      <Title>Страница пользователя</Title>
      <div className={style.profileContainer}>
        <img className={style.img} src={profile.imgURL} />
        <div className={style.infoCard}>
          <div className={style.name}>
            {profile.surname} {profile.name}
            {profile.badges &&
              profile.badges.length > 0 &&
              profile.badges.map((badge) => {
                return (
                  <Badge
                    key={badge.text}
                    color={badge.color}
                    text={badge.text}
                  />
                );
              })}
          </div>
          <div>
            <span className={style.info}>Возраст:</span>
            <span>{profile.age} лет</span>
          </div>
          <div>
            <div className={style.info}>Обо мне:</div>
            <span>{profile.about}</span>
          </div>
          <div>
            <span className={style.info}>Вы можете найти меня:</span>
            {Object.keys(profile.social).map((platform) => (
              <a
                className={style.link}
                key={platform}
                href={profile.social[platform]}
                target="_blank"
              >
                {platform}
              </a>
            ))}
          </div>
          <div>
            <span className={style.info}>Мои профессиональные навыки:</span>
            <div className={style.skills}>
              {Object.keys(profile.skills).map((skill) => (
                <div className={style.skill} key={skill}>
                  <ProgressCircle
                    value={profile.skills[skill]}
                    color="#655f53"
                    key={skill}
                  />
                  <div>{skill}</div>
                </div>
              ))}
            </div>
          </div>
          <Text textSize={"small"} bottomPadding={""}>
            {profile.other}
          </Text>
        </div>
      </div>
    </>
  );
};
