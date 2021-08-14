import PropTypes from 'prop-types';
import Stat from './Stat';

import s from '../statistics/Statistics.module.css';

const StatisticalList = function ({ stats }) {
  return (
    <ul className={s.list}>
      {stats.map(stat => (
        <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <StatisticalList stats={stats} />
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
};
