import React from "react";


class Welcome extends React.Component{
    render(){
        const {name}=this.props
        return(
            <>
            <h1>Hello Class</h1>
            {/* <h1>{this.props.name}</h1> */}
            <h1>{name}</h1>

            </>

        )
    }
}
export default Welcome