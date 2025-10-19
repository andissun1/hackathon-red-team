import PropTypes from 'prop-types';
import style from './progress.module.css';

export const ProgressCircle = ({ value, color }) => {
  return (
    <div className={style.wrapper}>
      <div
        className={style.circle}
        style={{
          background: `conic-gradient(${color} ${value * 3.6}deg, #e6e6e6 0deg)`,
        }}
      >
        <div className={style.inner}>
          <span style={{ color }}>{value}%</span>
        </div>
      </div>
    </div>
  );
};

ProgressCircle.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
};
