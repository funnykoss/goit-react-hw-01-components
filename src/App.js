import user from './components/social-profile/user.json';
import Profile from './components/social-profile/Profile';

import friends from './components//friend-list/friends.json';
import FriendsList from './components/friend-list/FriendsList';

import statisticalData from './components//statistics/statistical-data.json';
import Statistics from './components/statistics/Statistics';

import transactions from './components//transaction-history/transactions.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';

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
