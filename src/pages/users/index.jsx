import React from 'react';
import { UsersContext } from "../../context/contexts";
import style from './users.module.css';

const Users = () => {
    return (<UsersContext.Consumer>
             {context=>{
                const users=context.state.users;
                const usersJsx=users.map(user=>{
                    return  <div key={user.id} className={style.user}>
                        <p>Name:{user.name}</p>
                        <p>Email:{user.email}</p>
                        <p>Address:{user.address}</p>
                       

                    </div>
                }) 
                return (
                    <div >
                       <h1>Users Page</h1> 
                        <button onClick={context.toggleUserAccess} className={style.usersButton}>Open Users</button>
                      
                            <div className={style.users}>
                        {context.state.isUserAccess && usersJsx}
                        </div>
                    </div>
                )
            }}

    </UsersContext.Consumer>
    )
}

export default Users;


// const Friends=(props)=>{
//     const friends = props.friends;
//     const friendJsx = friends.map(friend => {
//         return <div key={friend.id} className={style.friend}>
//             <p className={style.pName}>Name: <span className={style.spanName}>{friend.name}</span></p>
//             <p  className={style.pName}>Username: <span className={style.spanName}>{friend.username}</span></p>
//             <p  className={style.pName}>Email: <span className={style.spanName}>{friend.email}</span></p>
//             <p  className={style.pName}>Address: <span className={style.spanName}>{friend.address}</span></p>
//         </div>
//     })
//     return (
//          <div>
//              <h1>Friends Page</h1>
//              <button onClick={props.toggleFriendAccess}>toggle Open</button>
//             <div className={style.friends}>
//                 {props.isFriendAccess &&  friendJsx}
//             </div>
//          </div>
//     )
// }
// export default Friends;

