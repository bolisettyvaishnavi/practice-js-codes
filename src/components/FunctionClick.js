import React from "react";

function FunctionClick(){
    function handleClick(){                                     // we should not use onClick={handleClick()} because 
                                                               //  it becomes function call
console.log("click")
    }
    return(
        <button onClick={handleClick}>Function Click</button>  // we should not use onClick={handleClick()} because 
                                                              //  it becomes function call
    )

}
export default FunctionClick