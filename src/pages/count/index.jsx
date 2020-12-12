import Minus from './minus';
import Plus from './plus';
import Result from './result';
import React from 'react';

//lifting state
class Count extends React.Component {

    state = {
        count: 0,
    }
    render() {
        return (
            <div className="countPage">
                <h1>Count Page</h1>
                <Plus plusCount={this.plusCount} />
                <Minus minusCount={this.minusCount} />
                <Result count={this.state.count} />
            </div>
        )
    }
    plusCount = () => {
        this.setState(prevState => ({
            ...prevState,
            count: this.state.count + 1
        }))
    }
    minusCount = () => {
        this.setState(prevState => ({
            ...prevState,
            count: this.state.count - 1
        }))
    }
}

export default Count;