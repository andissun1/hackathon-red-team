import PropTypes from 'prop-types';
import style from './text.module.css';

export const Text = ({
  children,
  bottomPadding = 'small',
  textSize = 'mediumText',
  limited = false,
}) => {
  return (
    <div
      className={`${style.text} ${style[bottomPadding]} ${style[textSize]} ${
        limited ? style['limited'] : ''
      }`}
    >
      {children}
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
  bottomPadding: PropTypes.string,
  textSize: PropTypes.string,
  limited: PropTypes.bool,
};
