import { useDispatch } from 'react-redux';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import HeartIcon from '../HeartIcon/HeartIcon';
import { Text } from '../Text/Text';
import style from './card.module.css';
import { useNavigate } from 'react-router-dom';
import { appActions, getConfirmation } from '../../Store/appReducer';

export const Card = ({
  id,
  name,
  surname,
  age,
  imgURL = './../../../public/default-photo.jpg',
  about,
  favourite = false,
  badges = [],
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openProfile = () => {
    navigate(`/profile/${id}`);
  };

  const onToggleFavourite = async () => {
    if (favourite) {
      const confirm = await dispatch(getConfirmation({ title: 'Убрать из избранного?' }));
      confirm ? dispatch(appActions.removeFromFavorites(id)) : null;
    } else dispatch(appActions.addToFavorites(id));
  };

  return (
    <div className={style.card}>
      <img className={style.img} src={imgURL} />
      <div className={style.name}>
        {surname} {name}, {age}
      </div>
      {badges && badges.length > 0 && (
        <div className={style.badges}>
          {badges.map((badge) => {
            return <Badge key={badge.text} color={badge.color} text={badge.text} />;
          })}
        </div>
      )}

      <div className={style.subtitle}>Немного обо мне:</div>
      <Text limited={true}>{about}</Text>
      <div className={style.buttonContainer}>
        <Button onClick={openProfile}>ОТКРЫТЬ</Button>
        <Button onClick={onToggleFavourite}>
          <HeartIcon variant={favourite ? 'filled' : 'outline'} />
        </Button>
      </div>
    </div>
  );
};
