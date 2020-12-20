import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ render,path, ...otherProps }) => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    if (isAuth && path!=='/login' && path!=='/registration') {
        return <Route render={render} {...otherProps} />
            }
            else if(isAuth && (path==='/login' || path==='/registration')){
              return   <Redirect from ="*" to="/" />
            }
            else if (!isAuth && (path==='/posts' || path==='/friends' || path === '/clients' || path === '/client/:id')){
                  return <Redirect from="*" to="/login" />
            }
            else {
                return <Route render={render} {...otherProps} />
    }
  
}

export default PrivateRoute;