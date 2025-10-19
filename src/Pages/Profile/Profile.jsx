import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../../Components/Slider/Slider';
import { Badge } from '../../Shared/Badge/Badge';
import { ProgressCircle } from '../../Shared/ProgressCircle/ProgressCircle';
import { Text } from '../../Shared/Text/Text';
import { Title } from '../../Shared/Title/Title';
import style from './profile.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileByID } from '../../Store/profileReducer';
import { Loader } from '../../Shared/Loader/Loader';

export const Profile = () => {
  const profileID = useParams().id;
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.profile);

  useEffect(() => {
    dispatch(getProfileByID(profileID));
  }, [dispatch, profileID]);

  if (!profile.id) return <Loader />;

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
                return <Badge key={badge.text} color={badge.color} text={badge.text} />;
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
          <Text textSize={'small'} bottomPadding={''}>
            {profile.other}
          </Text>
        </div>
      </div>
      {profile.portfolio && <Slider portfolio={profile.portfolio} />}
    </>
  );
};
