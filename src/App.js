import React from 'react';
import withScreenSizes from './hoc/withScreenSizes';
import Web from './versions/web';
import { withRouter } from 'react-router-dom';


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
    // {
    //   id: 7,
    //   href: '/friends',
    //   content: 'Friends'
    // },
    {
      id:7,
      href:'/users',
      content:'Users'
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
      href:'/todo',
      content:'Todo'
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
    isAuth: JSON.parse(localStorage.getItem('isAuth')) || false,
    
  }
  // static getDerivedStateFromProps(nextProps, nextState) {
  //   // console.log('next ' + nextState.isFriendAccess);
  //   // console.log('getDerivedStateFromProps');
  //   return null;
  // }


  render() {
    const width = this.props.width;
    if (width <= 1280)
      return <div>
        Width = 1280
      </div>

    return   <Web 
    data={data} 
    state={this.state}
    toggleAsideOpen = {this.toggleAsideOpen}
    setIsAuth ={this.setIsAuth}
    />
 
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
  // deleteCurrentPost=(id)=>{
  //   const posts = [...this.state.posts];
  //   posts.({
  //     id:id
  //   })
  //   this.setState(prevState => ({
  //     ...prevState,
  //     posts
  //   }))
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

 

}

export default withScreenSizes(withRouter(App));


