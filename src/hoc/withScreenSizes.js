import React from 'react';

const withScreenSizes=(Component)=>{
    return  class hoc extends React.Component {
            state={
                width:window.innerWidth,
                height:window.innerHeight
            }
            changeWindowSizesInState=(e)=>{
                this.setState(prevState=>({
                    ...prevState,
                    width:window.innerWidth,
                    height:window.innerHeight
                }))
            }
            componentDidMount(){
                window.addEventListener('resize',this.changeWindowSizesInState);
            }
            componentWillUnmount(){
                window.removeEventListener('resize',this.changeWindowSizesInState);
            }
            render(){return <Component 
            width={this.state.width}
            height={this.state.height}
            />}
            
    }

}
export default  withScreenSizes;