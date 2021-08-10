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
      <div key={user.id}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <FriendsList friends={friends} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={statisticalData} />;
      </div>

      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
