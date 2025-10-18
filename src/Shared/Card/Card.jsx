import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import HeartIcon from "../HeartIcon/HeartIcon";
import { Text } from "../Text/Text";
import style from "./card.module.css";
import { useNavigate } from "react-router-dom";

export const Card = ({
  id,
  name,
  surname,
  age,
  photo = "./../../../public/default-photo.jpg",
  about,
  favourite = false,
  badge = null,
}) => {
  const navigate = useNavigate();
  const openProfile = () => {
    navigate(`/profile/${id}`);
  };
  const onToggleFavourite = () => {
    console.log("favourite toggle");
  };
  return (
    <div className={style.card}>
      <img className={style.img} src={photo} />
      <div className={style.name}>
        {surname} {name}, {age}{" "}
        {badge && <Badge color={badge.color} text={badge.text} />}
      </div>
      <div className={style.subtitle}>Немного обо мне:</div>
      <Text limited={true}>{about}</Text>
      <div className={style.buttonContainer}>
        <Button onClick={openProfile}>ОТКРЫТЬ</Button>
        <Button onClick={onToggleFavourite}>
          <HeartIcon variant={favourite ? "filled" : "outline"} />
        </Button>
      </div>
    </div>
  );
};
