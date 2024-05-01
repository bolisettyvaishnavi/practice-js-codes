import React,{Component} from 'react'
import { RegComp } from './RegularComponent'
import { PureComp } from './PureComponent'
import MemoComp from './MemoComp'

export class ParentComp extends Component{
    constructor(){
        super()
        this.state={
            name:'vaishnavi'
        }
    }
    componentDidMount(){
        // setInterval(()=>{this.setState({name:'vaishnavi'})},2000)
    }
    render(){

        console.log('********************Parent******************')
   
        return(
            <div>
                <MemoComp name={this.state.name}/>
{/* <RegComp name={this.state.name}/>
<PureComp name={this.state.name}/> */}
            </div>
        )
    }
}