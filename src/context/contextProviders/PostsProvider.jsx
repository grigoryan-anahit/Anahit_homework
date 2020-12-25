import React from 'react';
import { isAllValid, maxLength, minLength } from '../../helpers/validators';
import { PostsContext } from '../contexts';

const minLength3 = minLength(3);
const maxLength20 = maxLength(20);
const maxlength100 = maxLength(100);

class PostsProvider extends React.Component {
    state = {
        posts: [
            {
                id: 1,
                title: "Serj Sargsyani Harcazruycy",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
                img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Serj1.jpg'
            },
            {
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
                img: 'https://auto.am/static/offers/2528599/s-41d057d239e974ba77f508d241527216.jpg'
            },
            {
                id: 3,
                title: "Nikol Heracir",
                body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
                img: 'https://www.arminfo.info/mcgallery/20191113075151.jpg'
            },
            {
                id: 4,
                title: "eum et est occaecati",
                body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
                img: 'https://ru.meteocast.net/tpl/images/meteocast_sun_and_cloud.gif'
            },
            {
                id: 5,
                title: "nesciunt quas odio",
                body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
                img: 'https://expert.ru/data/public/557273/557300/29-oktyabrya-pogoda.jpg'
            }
        ],
        isPostsAccess: false,
        newPostFormControl: {
            title: {
                value: '',
                isValid: false,
                touched: false,
                error: null
            },
            body: {
                value: '',
                isValid: false,
                touched: false,
                error: null
            },
            formError: null
        }
    }
    handleOnChange = ({ target: { name, value } }) => {
      let isValid = false;
        let error = '';
        switch (name) {
            case 'title': {
                if (minLength3(value) && maxLength20(value))
                    isValid = true;
                else
                    error = 'The title must have min 3 and max 20 simbols';
                break;
            }

            case 'body': {
                if (minLength3(value) && maxlength100(value))
                    isValid = true;
                else
                    error = 'The body must have min 3 and max 100 simbols';
                break;
            }
            default:
        }
        this.setState(prevState => ({
            ...prevState,
            newPostFormControl: {
                ...this.state.newPostFormControl,
                [name]: {
                    value: value,
                    isValid: isValid,
                    touched: true,
                    error: error
                }
            }
        }))
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        if (
            isAllValid({
                title: this.state.newPostFormControl.title,
                body: this.state.newPostFormControl.body
            })
        ) {
            this.setState(prevState => ({
                ...prevState,
                newPostFormControl: {
                    ...this.state.newPostFormControl,
                    formError: ''
                }

            }));
            this.addNewPost(
                this.state.newPostFormControl.title.value,
                this.state.newPostFormControl.body.value
            );
        } else {
            this.setState(prevState => ({
                ...prevState,
                newPostFormControl: {
                    ...this.state.newPostFormControl,
                    formError: 'Invalid Form'
                }
            }));
        }
    }
        
        addNewPost = (title, body) => {
            const posts = [...this.state.posts];
            posts.push({
                title,
                body,
                id: Date.now() + this.state.posts.length + 1
            })
            this.setState(prevState => ({
                ...prevState,
                posts
            }))
        }
    togglePostAccess = () => {
    this.setState((prevState) => ({
        ...prevState,
        isPostsAccess: !prevState.isPostsAccess
    }))
}
render(){

    return <PostsContext.Provider
        value={{
            state: this.state,
            addNewPost: this.addNewPost,
            togglePostAccess: this.togglePostAccess,
            handleOnSubmit: this.handleOnSubmit,
            handleOnChange: this.handleOnChange
        }}
    >
        {this.props.children}
    </PostsContext.Provider>
}

}
export default PostsProvider;