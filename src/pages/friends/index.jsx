import style from './friends.module.css';

const Friends=(props)=>{
    const friends = props.friends;
    const friendJsx = friends.map(friend => {
        return <div key={friend.id} className={style.friend}>
            <p className={style.pName}>Name: <span className={style.spanName}>{friend.name}</span></p>
            <p  className={style.pName}>Username: <span className={style.spanName}>{friend.username}</span></p>
            <p  className={style.pName}>Email: <span className={style.spanName}>{friend.email}</span></p>
            <p  className={style.pName}>Address: <span className={style.spanName}>{friend.address}</span></p>
        </div>
    })
    return (
         <div>
             <h1>Friends</h1>
             <button onClick={props.toggleFriendAccess}>toggle Open</button>
            <div className={style.friends}>
                {props.isFriendAccess &&  friendJsx}
            </div>
         </div>
    )
}
export default Friends;

