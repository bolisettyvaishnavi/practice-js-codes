import React,{Component} from 'react'

export class RegComp extends Component{
    render(){
        console.log('Regular')
        return(
            <div>

                <h1>Pure Component {this.props.name}</h1>
            </div>
        )
    }
}