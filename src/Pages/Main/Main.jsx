import { Card } from "../../Shared/Card/Card";
import { Text } from "../../Shared/Text/Text";
import { Title } from "../../Shared/Title/Title";

export const Main = (props) => {
  return (
    <>
      <Title>Главная</Title>
      <Text bottomPadding="big">
        Мы — команда разработчиков, участвующая в хакатоне от Result University.
        Наш коллектив объединяет специалистов направления React
      </Text>
      <Card
        name="Мария"
        surname="Беззубова"
        age="29"
        about="Какая-то информация"
      />
    </>
  );
};
