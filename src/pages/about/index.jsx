import React from 'react';
class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
            </div>
        )
    }
    componentWillUnmount() {
        console.log('Mahacav');
    }
}

export default About;