import React from "react";


class EventBind extends React.Component{
    constructor(){
        super()
        this.state={
            message:'hello'
        }
        // 3. this.handleClick=this.handleClick.bind(this)
    }
    // handleClick(){
    //     this.setState({message:'good'})
    // }

// React doc supportrs 3 or 4 approach
    //4.
    handleClick =()=>{
        this.setState({message:'good'})
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
           <button onClick={this.handleClick}>Event Click</button>  
           {/* if we use this our application breaks of setState is not defined */}


           {/* 1.    <button onClick={this.handleClick.bind(this)}>Event Click</button> */}
 {/* 2. using arrow function */}
          {/* 2. <button onClick={()=>this.handleClick()}>Event Click</button>   */}
 
 {/* binding happens in the constructor */}
{/* 3. <button onClick={this.handleClick}>Event Click</button>   */}


{/* 4. using arrow function */}
   {/* <button onClick={this.handleClick}>Event Click</button>   */}


            </>

        )
    }
}
export default EventBind