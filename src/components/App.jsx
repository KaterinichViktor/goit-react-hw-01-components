import React from 'react';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../components/jsons/user.json';
import friendsData from '../components/jsons/friends.json';
import statisticsData from '../components/jsons/data.json';
import transactionsData from '../components/jsons/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       {/* Відображення компонента Profile з відповідними пропсами */}
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* Відображення компонента FriendList з відповідними пропсами */}
      <FriendList friends={friendsData} />
      
      {/* Відображення компонента Statistics з відповідними пропсами */}
      <Statistics title="Upload stats" stats={statisticsData} />

      {/* Відображення компонента TransactionHistory з відповідними пропсами */}
      <TransactionHistory items={transactionsData} />
    </div>
  );
};



