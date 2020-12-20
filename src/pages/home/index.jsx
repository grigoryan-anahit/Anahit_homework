import { Link } from 'react-router-dom';
import React from 'react';

class Home extends React.Component {
    render() {
        const user = JSON.parse( localStorage.getItem('activeUser') );
        return (
            <div>
                <h1>Home Page</h1>
                {user && <p>Welcome {user.name}</p>   }
                <Link to="/about">to About Page</Link>
            </div>
        )
    }

}

export default Home;