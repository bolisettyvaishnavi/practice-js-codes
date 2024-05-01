import React from "react";
import ChildCompnent from "./ChildComponent";


class ParentComponent extends React.Component{
    constructor(){
        super()
        this.state={
            parentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(hi){
        console.log(hi)
        alert(`hello  ${this.state.parentName} ${hi}`)
    }
    render(){
        return(
            <>
            {/* method as props */}
            <ChildCompnent greetParen1t={this.greetParent}/>
           {/* <button onClick={this.greetParent}>Parent Click</button> */}
            </>

        )
    }
}
export default ParentComponent