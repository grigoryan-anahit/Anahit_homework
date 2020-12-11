import { Link } from 'react-router-dom';
import React from 'react';

class Home extends React.Component  {
    render(){
         
    return (
        <div>
            <h1>Home Page</h1>
        
            <Link to="/about">to About Page</Link>
        </div>
    )
    }
   
}

export default Home;