import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ render, ...otherProps }) => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    if (isAuth) {
        return <Route render={render} {...otherProps} />
            }else {
        return <Redirect from="*" to="/login" />
    }
}

export default PrivateRoute;