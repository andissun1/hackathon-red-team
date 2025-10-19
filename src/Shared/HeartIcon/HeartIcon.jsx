import PropTypes from 'prop-types';

export default function HeartIcon({ variant = 'outline' }) {
  const isFilled = variant === 'filled';
  const color = '#cc0000';

  const filledPath =
    'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

  const outlinePath =
    'M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.682 4.318 12.682a4.5 4.5 0 0 1 0-6.364z';

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 22 22"
      fill={isFilled ? color : 'none'}
      stroke={isFilled ? 'none' : color}
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={isFilled ? filledPath : outlinePath} />
    </svg>
  );
}

HeartIcon.propTypes = {
  variant: PropTypes.string,
};
