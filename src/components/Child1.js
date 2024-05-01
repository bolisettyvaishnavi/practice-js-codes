import React from 'react'

function Child1(props){
    const handleClickChild = () => {
        props.handleParent()
    }
        return(
            <div>
                <h1>This is Child1 Count-{props.count}</h1>
<button onClick={handleClickChild}>Child1</button>
            </div>
        )
    }
export default Child1