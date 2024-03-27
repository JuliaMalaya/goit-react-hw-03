import css from './Profile.module.css';

export default function Profile  ({ name, tag, location, image, stats: { followers, views, likes } }) {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                    <img
                        src={image}
                        alt={name}
                        width="116"
                        height="121"
                        className={css.imgContainer}
                    />
                <p><b>{name}</b></p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.listStatistics}>
                <li className={css.listStatItem}>
                    <span>Followers</span>
                    <span><b>{followers}</b></span>
                </li>
                <li className={css.listStatItem}>
                    <span>Views</span>
                    <span><b>{views}</b></span>
                </li>
                <li className={css.listStatItem}>
                    <span>Likes</span>
                    <span><b>{likes}</b></span>
                </li>
            </ul>
        </div>
    );
}