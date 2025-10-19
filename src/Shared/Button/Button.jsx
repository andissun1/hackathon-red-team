import PropTypes from 'prop-types';
import style from './button.module.css';
export const Button = ({
  children,
  rounded = 'rounded',
  cancel = false,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${style.button} ${style[rounded] ? style[rounded] : ''} ${
        cancel ? style.cancel : ''
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
  rounded: PropTypes.string,
  cancel: PropTypes.bool,
  onClick: PropTypes.func,
  props: PropTypes.object,
};
