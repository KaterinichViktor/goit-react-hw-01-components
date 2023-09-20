import React from 'react';
import '../FriendList/FriendList.css';

// Компонент <FriendListItem> для відображення одного друга
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="itemFriend">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className="friendAvatar" src={avatar} alt="User avatar" width="48" />
      <p className="friendName">{name}</p>
    </li>
  );
};

// Компонент <FriendList> для відображення списку друзів
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
