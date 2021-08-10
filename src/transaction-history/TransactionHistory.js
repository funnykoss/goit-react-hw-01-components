import Transaction from '../components/Transaction';

export default function TransactionHistory({ items }) {
  return items.map(item => (
    <Transaction
      key={item.id}
      type={item.type}
      amount={item.amount}
      currency={item.currency}
    />
  ));
}
