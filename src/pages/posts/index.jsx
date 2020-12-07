import style from './posts.module.css';
import { Jumbotron, Container } from 'reactstrap';
import { ButtonToggle } from "reactstrap";


const Posts = (props) => {
    const posts = props.posts;
    const postsJsx = posts.map(post => {
        return <div key={post.id} >
             <Jumbotron fluid>
        <Container fluid>
            <img src={post.img}  style={{width:'100px',height:'100px'}} alt ="postImage" />
    <h1 className="display-3">{post.title}</h1>
          <p className="lead">{post.body}</p>
        </Container>
      </Jumbotron>
  

           
        </div>
    })
  

    return (
        <div className="post_main" >
            <h1>Posts</h1>
            <ButtonToggle color="primary" onClick={props.togglePostAccess}>toggle Open</ButtonToggle>{' '}
            
            <div className={style.posts}>
                {props.isPostsAccess && postsJsx}
            </div>
        </div>
    )
}

export default Posts;