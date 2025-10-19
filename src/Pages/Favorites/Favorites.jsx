import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../Shared/Card/Card';
import { Title } from '../../Shared/Title/Title';
import { getFavorites } from '../../Store/appReducer';
import { useEffect } from 'react';
import style from './favourites.module.css';
import { Text } from '../../Shared/Text/Text';
import { Loader } from '../../Shared/Loader/Loader';

export const Favorites = (props) => {
  const dispatch = useDispatch();
  const profiles = useSelector((store) => store.app.profiles);
  const favorites = useSelector((store) => store.app.favorites);

  useEffect(() => {
    dispatch(getFavorites());
  }, [favorites]);

  if (!profiles) return <Loader />;

  return (
    <>
      <Title>Избранное</Title>
      {favorites.length === 0 && <Text>В избранном нет карточек</Text>}
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
