import PropTypes from 'prop-types';
import s from '../friend-list/Friends.module.css';

export default function Friends({ avatar, name, isOnline }) {
  const typeClass = isOnline ? s.isOnline : s.isOffline;
  return (
    <li className={s.item}>
      <span className={typeClass}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
