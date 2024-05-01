import React from "react";
import Welcome from "./classWelcome";


class ClassMessage extends React.Component{
    constructor(){
        super()
        this.state={
            messages:"Welcome visitor"
        }
    }
    changeHandler(){
        this.setState({messages:'Subscribe'})
    }
    render(){
        return(
            <>
            {/* <h1>Hello Class123</h1> */}
            <h1>{this.state.messages}</h1>
            {/* <button onClick={this.setState({messages:'Subscribe'})}>Subscribe</button> */}
            <button onClick={()=>this.changeHandler}>Subscribe</button>


            </>

        )
    }
}
export default ClassMessage