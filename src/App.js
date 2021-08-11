import user from './social-profile/user.json';
import Profile from './components/Profile';

import friends from './friend-list/friends.json';
import FriendsList from './friend-list/FriendsList';

import statisticalData from './statistics/statistical-data.json';
import Statistics from './statistics/Statistics';

import transactions from './transaction-history/transactions.json';
import TransactionHistory from './transaction-history/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        key={user.id}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendsList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
