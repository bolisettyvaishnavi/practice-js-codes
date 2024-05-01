import React from "react";


class UserGreeting extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedin:false
        }
    }
    render(){

        //if else
        // if(this.state.isLoggedin){
        // return <h1>Welcome vaishnavi</h1>
        // }else{
        //     return <h1>Welcome vyshu</h1>
        // }

        // element variables
        // let message
        // if(this.state.isLoggedin){
        //     message=<div>Welcome vaishnavi</div>
        // }else{
        //     message=<div>Welcome vyshu</div>

        // }
        // return <div>{message}</div>

        // ternary operator
        // return(
        //     this.state.isLoggedin?<h1>Welcome vaishnavi</h1>:<h1>Welcome vyshu</h1>
        // )

        //short circuit operator (if u want to render something or nothing)
      return  this.state.isLoggedin && <h1>Welcome vaishnavi</h1>
    }
}
export default UserGreeting