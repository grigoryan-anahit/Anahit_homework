import React from 'react';
import ErrorPage from '../pages/404';

class ErrorBoundary extends React.Component{
    state={
        hasError:false,
        errorMessage:null
    }
    componentDidCatch(error, info) {
        console.log('Errro With Me' , error);
        this.setState({ hasError: true ,errorMessage:error});
    }
    render(){
        this.state.hasError && <ErrorPage />
        return this.props.children
    }
}
export default ErrorBoundary;