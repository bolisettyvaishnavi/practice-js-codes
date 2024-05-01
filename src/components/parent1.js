import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent1(){
    const [count,setCount] = useState(0)
    const handleParent = () =>{
setCount(count+1)
    }
        return(
            <div>
                {/* {count} */}
                <Child1 handleParent={handleParent} count={count} />
                <Child2 count={count}/>
            </div>
        )
    }
export default Parent1