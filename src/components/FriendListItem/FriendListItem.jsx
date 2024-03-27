import styles from './FriendListItem.module.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={styles.imgFriend} src={avatar} alt="Avatar" width="50" />
      <p className={styles.friendName}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
