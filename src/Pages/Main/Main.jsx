import { useEffect } from 'react';
import { Card } from '../../Shared/Card/Card';
import { Text } from '../../Shared/Text/Text';
import { Title } from '../../Shared/Title/Title';
import style from './main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfiles } from '../../Store/appReducer';

export const Main = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.app.favorites);
  const profiles = useSelector((store) => store.app.profiles);

  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  if (!profiles) return <h2>Загрузка...</h2>;

  return (
    <>
      <Title>Главная</Title>
      <Text bottomPadding="big">
        Мы — команда разработчиков, участвующая в хакатоне от Result University. Наш
        коллектив объединяет специалистов направления React
      </Text>
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
