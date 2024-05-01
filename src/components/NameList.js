import React from "react"
import Person from "./Person"
// const NameList = () =>{
    function NameList(){
        const names=['divya','vyshu','sudheeer','keerthi']
        const persons=[{
            id:1,
            name:'divya',
            age:25,
            skill:'teaching'
        },
        {
            id:2,
            name:'vyshu',
            age:22,
            skill:'software'
        },{
            id:3,
            name:'sudheer',
            age:20,
            skill:'software'
        },{
            id:4,
            name:'keerthi',
            age:18,
            skill:'study'
        },
    
    ]
    const names1=names.map((name)=><h2>{name}</h2>)
    const personList=persons.map((person)=><Person person={person}/>)
    return(
    <>
    {personList}
    {names1}
    </>
)}

export default NameList