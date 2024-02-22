import css from "./FriendList.module.css";

export function FriendListItem({ key, avatar, name, isOnline }) {
  return (
    <li key={key} className={css.friend_item}>
      <span className={isOnline ? css.true : css.false}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}