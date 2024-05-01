import React from "react";

//Normal function
// function Greet(){
//     return(
//         <>
//         <h1>Hello vaishnavi</h1>
//         </>
//     )
// }

// ES6 arrow function
// const Greet = (props) =>{
//     return(
//     <>
//     <h1>{props.name}</h1>
//     <h1>{props.children}</h1>
//     </>
// )}


//Destructring props
// const Greet = ({name,children}) =>{  //destructuring in parameter
const Greet = (props) =>{
const {name,children} = props //destructuring in function body

    return(
    <>
    <h1>{name}</h1>
    <h1>{children}</h1>
    </>
)}

export default Greet