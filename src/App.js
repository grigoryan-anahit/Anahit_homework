import React from 'react';
import Nav from './components/nav';
import Aside from './components/aside';
import { Route, Switch, Redirect } from 'react-router-dom';

//pages
import About from './pages/about';
import ContactUs from './pages/contactus';
import Login from './pages/login';
import Registration from './pages/registration';
import Posts from './pages/posts';
import Home from './pages/home';
import Friends from './pages/friends';

//local data
const data = {
  navItems: [
    {
      id: 1,
      href: '/',
      content: 'Home'
    },
    {
      id: 2,
      href: '/about',
      content: 'About'
    },
    {
      id: 3,
      href: '/contactus',
      content: 'Contact Us'
    },
    {
      id: 4,
      href: '/login',
      content: 'Login'
    },
    {
      id: 5,
      href: '/registration',
      content: 'Registration'
    },
    {
      id: 6,
      href: '/posts',
      content: 'Posts'
    },
    {
      id: 7,
      href: '/friends',
      content: 'Friends'
    }

  ],
  posts: [
    {
      id: 1,
      title: "Serj Sargsyani Harcazruycy",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      id: 3,
      title: "Nikol Heracir",
      body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
    }
  ],
  friends:[
    
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: "Gwenborough",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address:"Wisokyburgh",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address:"Suite 847", 
        },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address:  "South Elvis",
        },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: "Roscoeview",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: "Apt. 950",
      }
  ]
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAsideOpen = this.toggleAsideOpen.bind(this)
  }
  state = {
    asideIsOpen: false,
    isPostsAccess: false,
    isFriendAccess:false
  }

  render() {
    return (
      <div className="App">
        <Nav toggleAsideOpen={this.toggleAsideOpen} navItems={data.navItems} />
        <Aside asideIsOpen={this.state.asideIsOpen} />
        <div className="mainContent">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/posts"
              render={(props) => <Posts {...props}
                posts={data.posts}
                isPostsAccess={this.state.isPostsAccess}
                togglePostAccess={this.togglePostAccess}
              />}
            />
            <Route path="/friends"
            render={(props)=> <Friends {...props}
            friends={data.friends}
            isFriendAccess={this.state.isFriendAccess}
                toggleFriendAccess={this.toggleFriendAccess}
         /> }
         />

            <Redirect to="/" from="*" />
          </Switch>
        </div>

      </div>
    )
  }


  toggleAsideOpen() {
    this.setState(prevState => ({
      ...prevState,
      asideIsOpen: !prevState.asideIsOpen
    }))
  }

  togglePostAccess = () => {
    this.setState((prevState) => ({
      ...prevState,
      isPostsAccess: !prevState.isPostsAccess
    }))
  }
  toggleFriendAccess = () => {
    this.setState((prevState) => ({
      ...prevState,
      isFriendAccess: !prevState.isFriendAccess
    }))
  }

}

export default App;


