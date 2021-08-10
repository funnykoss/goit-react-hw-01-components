import Stat from '../components/Stat';

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      {stats.map(stat => (
        <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
      ;
    </section>
  );
}
