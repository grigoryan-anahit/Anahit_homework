import React from 'react';
import Nav from '../components/nav';
import Aside from '../components/aside';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../security/privateRoute';
import withSuspense from '../hoc/withSuspense';
//pages
import About from '../pages/about';
import ContactUs from '../pages/contactus';
import Login from '../pages/login';
import Registration from '../pages/registration';
import Posts from '../pages/posts';
import Home from '../pages/home';
import Friends from '../pages/friends';
import Clients from '../pages/clients';
import Client from '../pages/client';
const Count = React.lazy(() => import('../pages/count'));


    const Web = ({data ,state , toggleAsideOpen ,togglePostAccess ,toggleFriendAccess ,setIsAuth,addNewPost}) => {
        return (
            <div className="App">
                <Nav toggleAsideOpen={toggleAsideOpen} navItems={data.navItems} setIsAuth={setIsAuth} isAuth={state.isAuth} />
                <Aside asideIsOpen={state.asideIsOpen} />
                <div className="mainContent">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contactus" component={ContactUs} />
                        <PrivateRoute path="/login" render={(props) => <Login {...props} setIsAuth={setIsAuth} />} />
                        <PrivateRoute path="/registration" component={Registration} />
                        <PrivateRoute path="/clients" component={Clients} />
                        <Route path='/count' component={withSuspense(Count)} />
                        <PrivateRoute path="/posts"
                            render={(props) => <Posts {...props}
                                posts={state.posts}
                                isPostsAccess={state.isPostsAccess}
                                togglePostAccess={togglePostAccess}
                                addNewPost ={addNewPost}

                            />}
                        />
                        <PrivateRoute path="/friends"
                            render={(props) => <Friends {...props}
                                friends={data.friends}
                                isFriendAccess={state.isFriendAccess}
                                toggleFriendAccess={toggleFriendAccess}
                            />}
                        />
                        <PrivateRoute path="/client/:id" component={Client} />
    
                        <Redirect to="/" from="*" />
                    </Switch>
                </div>
    
            </div>
        )
}
export default Web;