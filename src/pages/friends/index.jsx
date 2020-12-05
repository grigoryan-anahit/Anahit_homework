import style from './friends.module.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const Friends = (props) => {
    const friends = props.friends;
    const friendJsx = friends.map(friend => {
        return <div key={friend.id}>
            <Card>
                <CardImg top src={friend.img} alt="Avatar" />
                <CardBody>
                    <CardTitle tag="h5">Name: <span className={style.spanName}>{friend.name}</span></CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Username: <span className={style.spanName}>{friend.username}</span></CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Address: <span className={style.spanName}>{friend.address}</span> </CardSubtitle>
                    <CardText>Email: <span className={style.spanName}>{friend.email}</span></CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>


    })
    return (
        <div>
            <h1>Friends Page With Ashot</h1>
            <button onClick={props.toggleFriendAccess}>toggle Open</button>
            <div className={style.friends}>
                {props.isFriendAccess && friendJsx}
            </div>
        </div>
    )
}
export default Friends;

