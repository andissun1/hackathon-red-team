import PropTypes from 'prop-types';
import style from './title.module.css';
export const Title = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
};
