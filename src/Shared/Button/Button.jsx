import style from './button.module.css';
export const Button = ({ children, rounded = 'rounded', onClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${style.button} ${style[rounded] ? style[rounded] : ''}`}
    >
      {children}
    </button>
  );
};
