import style from './slider.module.css';
import { useState } from 'react';
import { Button } from '../../Shared/Button/Button';
import { Title } from '../../Shared/Title/Title';

export const Slider = ({ portfolio }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const prevSlide = () => {
    if (imageIndex === 0) return setImageIndex(portfolio.length - 1);
    return setImageIndex(imageIndex - 1);
  };

  const nextSlide = () => {
    if (imageIndex === portfolio.length - 1) return setImageIndex(0);
    return setImageIndex(imageIndex + 1);
  };

  if (!portfolio) return <h2>Загрузка...</h2>;

  return (
    <>
      <Title>Портфолио</Title>
      <div className={style.slider}>
        <Button className={style.prevSlide} onClick={prevSlide}>
          ⮜
        </Button>
        <div className={style.sliderContent}>
          {portfolio.map(({ image, title }, index) => (
            <div className={style.sliderItem} key={index}>
              <img src={image} alt="" style={{ translate: `${-100 * imageIndex}%` }} />
            </div>
          ))}
          ;
        </div>
        <div className={style.navBar}>
          {portfolio.map((_, index) => {
            return (
              <Button
                key={index}
                onClick={() => setImageIndex(index)}
                style={
                  index === imageIndex
                    ? { background: 'var(--main-20)', color: 'black' }
                    : null
                }
              >
                {index + 1}
              </Button>
            );
          })}
        </div>
        <h1 className={style.title}>{portfolio[imageIndex].title}</h1>
        <Button onClick={nextSlide}>⮞</Button>
      </div>
    </>
  );
};
