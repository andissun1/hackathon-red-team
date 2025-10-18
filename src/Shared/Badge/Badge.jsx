import style from './badge.module.css';

export const Badge = ({ color = 'dark', text }) => {
  return <span className={`${style.badge} ${style[color]}`}>{text}</span>;
};
