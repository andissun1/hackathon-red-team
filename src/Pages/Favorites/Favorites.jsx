import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../Shared/Card/Card";
import { Title } from "../../Shared/Title/Title";
import { getFavorites } from "../../Store/appReducer";
import { useEffect } from "react";
import style from "./favourites.module.css";
export const Favorites = (props) => {
  const dispatch = useDispatch();
  const profiles = useSelector((store) => store.app.profiles);
  const favorites = useSelector((store) => store.app.favorites);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  if (!profiles) return <h2>Загрузка...</h2>;

  return (
    <>
      <Title>Избранное</Title>
      <div className={style.cardsContainer}>
        {profiles.map(({ id, name, surname, age, about, badges, imgURL }) => (
          <Card
            id={id}
            key={id}
            name={name}
            imgURL={imgURL}
            surname={surname}
            age={age}
            about={about}
            badge={badges[0]}
            favourite={favorites.includes(id)}
          />
        ))}
      </div>
    </>
  );
};
