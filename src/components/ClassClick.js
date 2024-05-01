import React from "react";


class ClassClick extends React.Component{
    handleClick(){
        console.log("clicked")
    }
    render(){
        return(
            <>
           <button onClick={this.handleClick}>Class Click</button>
            </>

        )
    }
}
export default ClassClick