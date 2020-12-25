import style from './posts.module.css';
import React ,{ memo } from 'react';
import { PostsContext } from '../../context/contexts';



const Posts = () => {
    
    return (
        <PostsContext.Consumer>
            {context => {

                const posts = context.state.posts;
                const formControl = context.state.newPostFormControl;
                const postsJsx = posts.map(post => {
                    return <div key={post.id} className={style.post}>
                        <p className={style.title}>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                })

                return (
                    <div>
                        <h1>Posts</h1>
                        <div className="addPostForm">
                            <form>
                                {formControl.formError &&
                                    <div>
                                        <span>{formControl.formError}</span>
                                    </div>
                                }
                                <div className={style.errorInput} >
                                <span className={style.error}>{context.state.newPostFormControl.title.error}</span>
                                <input type="text" placeholder="New Post Title" name="title" onChange={context.handleOnChange} />
                                 </div>
                                <div className={style.errorInput}>
                                <span className={style.error}>{context.state.newPostFormControl.body.error}</span>
                                <input type="text" placeholder="New Post Body" name="body" onChange={context.handleOnChange} />
                                </div>
                                <button onClick={context.handleOnSubmit}>Post</button>
                            </form>
                        </div>
                        <button onClick={context.togglePostAccess}>toggle Open</button>
                        <div className={style.posts}>
                            {context.state.isPostsAccess && postsJsx}
                        </div>
                    </div>
                )
            }}
        </PostsContext.Consumer>
    )


}

export default memo(Posts);