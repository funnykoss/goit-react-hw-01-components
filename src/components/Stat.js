import s from '../statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import RandomColor from '../statistics/RandomColor';

export default function Stat({ label, percentage }) {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: `${RandomColor()}`,
      }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}
Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
