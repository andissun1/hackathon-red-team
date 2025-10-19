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
