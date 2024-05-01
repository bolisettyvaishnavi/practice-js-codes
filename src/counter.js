import React from "react";


class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
//         this.setState({
    // count:this.state.count+1
// }
//  ,()=>{
// console.log(this.state.count)                             //setState method has 2 parameters 
                                                            //1. state object
                                                            // 2 .callback function(it is an arrow function)

//         })
// console.log(this.state.count)


this.setState(prevState=>({
count:prevState.count+1          //In arrow function it is binding directly
                                    //we need to pass a function as an argument instead of regular object
},()=>{
console.log(prevState)

}))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    render(){
        return(
            <>
            <h1>Count - {this.state.count}</h1>
            {/* <button onClick={this.setState({messages:'Subscribe'})}>Subscribe</button> */}
            <button onClick={()=>this.incrementFive()}>Increment</button>


            </>

        )
    }
}
export default Counter