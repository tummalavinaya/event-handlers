import React, { Component } from 'react';
class Classclick extends Component{
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
             message : "hello "
        }
    }
    
    clickHandler = () => {
                this.setState({
                message : "good bye"
             }
        );
        console.log(this);
    }
    render(){
        return (<div>
            <h1>{this.state.message}</h1>
            <button onClick = {this.clickHandler}>click here</button>
            <button onClick = {this.clickHandler.bind(this)}>click here for arrow function</button>
            <button onClick = {() => this.clickHandler()}>click for arrow function as body</button>
        </div>);
    }
}
export default Classclick;