import style from './posts.module.css';

const Posts = (props) => {
    const posts = props.posts;
    const postsJsx = posts.map(post => {
        return <div key={post.id} className={style.post}>
            <p className={style.title}>{post.title}</p>
            <p>{post.body}</p>
        </div>
    })
  

    return (
        <div >
            <h1>Posts</h1>
            <button onClick={props.togglePostAccess}>toggle Open</button>
            <div className={style.posts}>
                {props.isPostsAccess && postsJsx}
            </div>
        </div>
    )
}

export default Posts;