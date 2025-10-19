import style from './slider.module.css';
import { useState } from 'react';
import { Button } from '../../Shared/Button/Button';
import { Title } from '../../Shared/Title/Title';
import { Loader } from '../../Shared/Loader/Loader';
import PropTypes from 'prop-types';

export const Slider = ({ portfolio }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const prevSlide = () => {
    imageIndex === 0
      ? setImageIndex(portfolio.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  const nextSlide = () => {
    imageIndex === portfolio.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };

  if (!portfolio) return <Loader />;

  return (
    <>
      <Title>Портфолио</Title>
      <div className={style.slider}>
        <Button className={style.prevSlide} onClick={prevSlide}>
          ⮜
        </Button>
        <div className={style.sliderContent}>
          {portfolio.map(({ image }, index) => (
            <img src={image} style={{ translate: `${-100 * imageIndex}%` }} key={index} />
          ))}
        </div>
        <div className={style.navBar}>
          {portfolio.map((_, index) => {
            const isActive =
              index === imageIndex
                ? { background: 'var(--main-20)', color: 'black' }
                : null;

            return (
              <Button
                key={index}
                onClick={() => setImageIndex(index)}
                style={isActive}
                children={index + 1}
              />
            );
          })}
        </div>
        <Title>{portfolio[imageIndex].title}</Title>
        <Button onClick={nextSlide}>⮞</Button>
      </div>
    </>
  );
};

Slider.propTypes = {
  portfolio: PropTypes.array,
};
