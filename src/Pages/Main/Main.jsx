import { Card } from "../../Shared/Card/Card";
import { Text } from "../../Shared/Text/Text";
import { Title } from "../../Shared/Title/Title";
import style from "./main.module.css";

export const Main = (props) => {
  return (
    <>
      <Title>Главная</Title>
      <Text bottomPadding="big">
        Мы — команда разработчиков, участвующая в хакатоне от Result University.
        Наш коллектив объединяет специалистов направления React
      </Text>
      <div className={style.cardsContainer}>
        <Card
          id="1"
          name="Имя"
          surname="Фамилия"
          age="29"
          about="Уверенный в себе специалист, открытый к новым вызовам и развитию. Всегда стремлюсь к качественному результату."
          badge={{ color: "dark", text: "check" }}
          favourite={true}
        />
        <Card
          id="2"
          name="Имя"
          surname="Фамилия"
          age="29"
          about="Обожаю создавать что-то своими руками, будь то дизайн, музыка или просто уют вокруг себя."
          badge={{ color: "medium", text: "check" }}
          favourite={false}
        />
        <Card
          id="3"
          name="Имя"
          surname="Фамилия"
          age="29"
          about="Живу с улыбкой, ценю искренних людей и вкусный кофе"
          badge={{ color: "light", text: "check" }}
          favourite={true}
        />
      </div>
    </>
  );
};
