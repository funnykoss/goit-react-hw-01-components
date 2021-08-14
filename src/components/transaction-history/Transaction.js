import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
export default function Transaction({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.item}>{type}</td>
      <td className={s.item}>{amount}</td>
      <td className={s.item}>{currency}</td>
    </tr>
  );
}
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
