import { Button } from "../Button/Button";
import HeartIcon from "../HeartIcon/HeartIcon";
import { Text } from "../Text/Text";
import style from "./card.module.css";

export const Card = ({
  name,
  surname,
  age,
  photo = "./../../../public/default-photo.jpg",
  about,
}) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={photo} />
      <div className={style.name}>
        {surname} {name}, {age}
      </div>
      <div className={style.subtitle}>Немного обо мне:</div>
      <Text>{about}</Text>
      <div className={style.buttonContainer}>
        <Button>Открыть</Button>
        <Button>
          <HeartIcon variant="filled" />
        </Button>
      </div>
    </div>
  );
};
