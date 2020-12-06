import { ButtonToggle } from "reactstrap";
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
                    <CardTitle tag="h5">Name: {friend.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Username: {friend.username}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Address: {friend.address} </CardSubtitle>
                    <CardText>Email: {friend.email}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>


    })
    return (
        <div className="main_friends_div">
            <h1 >Friends Page With Ashot</h1>
            <ButtonToggle color="success"onClick={props.toggleFriendAccess}> Open friends list</ButtonToggle>{' '}
           
            <div className="friends">
                {props.isFriendAccess && friendJsx}
            </div>
        </div>
    )
}
export default Friends;

