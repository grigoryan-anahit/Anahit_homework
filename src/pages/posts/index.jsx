import React from 'react';
import style from './posts.module.css';

import { ButtonToggle } from "reactstrap";



class  Posts extends React.Component  {
    constructor(props){
          super(props);
    this.addPostInputRef=React.createRef();
    }
    handleAddPost = (event) => {

        const value = this.addPostInputRef.current.value;
        this.props.addNewPost(value);
    }
  render(){
          const posts = this.props.posts;
    const postsJsx = posts.map(post => {
        return <div key={post.id}  className={style.postDiv}>
    <h1 >{post.title}</h1>
          <p className={style.postBody}>{post.body}</p>
       </div>
    })
    return (
        <div className="post_main" >
            <h1>Posts</h1>
            <div className="addPostForm">
            <textarea type="text" placeholder="Type a new post" ref={this.addPostInputRef} />
            <button onClick={this.handleAddPost}>Post</button>
        </div>
            <ButtonToggle color="primary" onClick={this.props.togglePostAccess}>toggle Open</ButtonToggle>{' '}
            
            <div className={style.posts}>
                {this.props.isPostsAccess && postsJsx}
            </div>
        </div>
    )
  }
}

export default Posts;