import PropTypes from 'prop-types';
import style from './badge.module.css';

export const Badge = ({ color = 'dark', text }) => {
  return <span className={`${style.badge} ${style[color]}`}>{text}</span>;
};

Badge.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
