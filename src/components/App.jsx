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
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friendsData} />
      
      <Statistics title="Upload stats" stats={statisticsData} />

      <TransactionHistory items={transactionsData} />
    </div>
  );
};



