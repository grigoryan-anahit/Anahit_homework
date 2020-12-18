import React from 'react';
import Nav from './components/nav';
import Aside from './components/aside';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import PrivateRoute from './security/privateRout';
//pages
import About from './pages/about';
import ContactUs from './pages/contactus';
import Login from './pages/login';
import Registration from './pages/registration';
import Posts from './pages/posts';
import Home from './pages/home';
import Friends from './pages/friends';
import Count from './pages/count';
import Clients from './pages/clients';
import Client from './pages/client';

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
    },
    {
      id:8,
      href:'/count',
      content:'Count'
    },
    {
      id:9,
      href:'/clients',
      content:'Clients'
    },
    {
       id:10,
    href:'/client',
    content:'Client'
    }

  ],
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
  friends: [

    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: "Gwenborough",
      img: 'https://scontent.fevn6-1.fna.fbcdn.net/v/t1.0-9/129276836_3511697165585055_2515850825243186322_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=s7_FFJWX_dMAX8RSc_J&_nc_ht=scontent.fevn6-1.fna&oh=91fa9bff16abf40acc7ffa8910abed23&oe=5FF1DD4B'
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: "Wisokyburgh",
      img: 'https://scontent.fevn6-1.fna.fbcdn.net/v/t1.0-9/129276836_3511697165585055_2515850825243186322_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=s7_FFJWX_dMAX8RSc_J&_nc_ht=scontent.fevn6-1.fna&oh=91fa9bff16abf40acc7ffa8910abed23&oe=5FF1DD4B'
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: "Suite 847",
      img: 'https://scontent.fevn6-1.fna.fbcdn.net/v/t1.0-9/129276836_3511697165585055_2515850825243186322_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=s7_FFJWX_dMAX8RSc_J&_nc_ht=scontent.fevn6-1.fna&oh=91fa9bff16abf40acc7ffa8910abed23&oe=5FF1DD4B'
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: "South Elvis",
      img: 'https://scontent.fevn6-1.fna.fbcdn.net/v/t1.0-9/129276836_3511697165585055_2515850825243186322_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=s7_FFJWX_dMAX8RSc_J&_nc_ht=scontent.fevn6-1.fna&oh=91fa9bff16abf40acc7ffa8910abed23&oe=5FF1DD4B'
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: "Roscoeview",
      img: 'https://scontent.fevn6-1.fna.fbcdn.net/v/t1.0-9/129276836_3511697165585055_2515850825243186322_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=s7_FFJWX_dMAX8RSc_J&_nc_ht=scontent.fevn6-1.fna&oh=91fa9bff16abf40acc7ffa8910abed23&oe=5FF1DD4B'
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: "Apt. 950",
      img: 'https://scontent.fevn6-1.fna.fbcdn.net/v/t1.0-9/129276836_3511697165585055_2515850825243186322_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=s7_FFJWX_dMAX8RSc_J&_nc_ht=scontent.fevn6-1.fna&oh=91fa9bff16abf40acc7ffa8910abed23&oe=5FF1DD4B'
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
    isFriendAccess: false,
    isAuth: JSON.parse(localStorage.getItem('isAuth')) || false
  }
  // static getDerivedStateFromProps(nextProps, nextState) {
  //   // console.log('next ' + nextState.isFriendAccess);
  //   // console.log('getDerivedStateFromProps');
  //   return null;
  // }


  render() {

    return (
      <div className="App">
        <Nav toggleAsideOpen={this.toggleAsideOpen} navItems={data.navItems} setIsAuth={this.setIsAuth} isAuth={this.state.isAuth} />
        <Aside asideIsOpen={this.state.asideIsOpen} />
        <div className="mainContent">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <PrivateRoute path="/login" render={(props) => <Login {...props} setIsAuth={this.setIsAuth} />} />
            <PrivateRoute path="/registration" component={Registration} />
            <Route path="/count" component={Count}/>
            <PrivateRoute
              path="/posts"
              render={(props) => <Posts {...props}
                posts={data.posts}
                isPostsAccess={this.state.isPostsAccess}
                togglePostAccess={this.togglePostAccess}
              />}
            />
            <PrivateRoute 
            path="/friends"
              render={(props) => <Friends {...props}
                friends={data.friends}
                isFriendAccess={this.state.isFriendAccess}
                toggleFriendAccess={this.toggleFriendAccess}
              />}
            />
            <PrivateRoute path="/clients" component={Clients} />
            <PrivateRoute path="/client/:id" component={Client} />

            <Redirect to="/" from="*" />
          </Switch>
        </div>

      </div>
    )
  }
  // componentDidMount() {
  //   console.log('Component Did MOunt');
  // }


  // static getDerivedStateFromProps


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   console.log('previous ' + nextState.isFriendAccess);
  //   if (nextState.isFriendAccess === this.state.isFriendAccess) {
  //     return false;
  //   }

  //   return true;
  // }
  //rendeer

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate');
  //   const x = {
  //     name:'Ashot'
  //   }
  //   return x.name;

  // }

  // componentDidUpdate(nextProps ,nextState  ,snapshot) {
  //   console.log('snap = ' + snapshot);
  //   console.log('Did Update');
  // }

  setIsAuth = (isAuth = false) => {
    const { history } = this.props;
    localStorage.setItem('isAuth', isAuth);
    if (!isAuth){
      history.push('/login')
      localStorage.setItem('activeUser' , JSON.stringify(null))
    }

    this.setState({ ...this.state, isAuth: isAuth })
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

export default withRouter(App);


