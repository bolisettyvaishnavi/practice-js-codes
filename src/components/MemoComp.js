import React from 'react'

function MemoComp(props){
        console.log('Memo')
        return(
            <div>

                <h1>Memo Component {props.name}</h1>
            </div>
        )
    }
export default React.memo(MemoComp)