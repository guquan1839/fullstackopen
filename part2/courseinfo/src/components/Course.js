import React from "react";


const Header = ({name}) => {
    return(
      <div>
        <h1>
          {name}
        </h1>
      </div>
    )
  }
  
  const Content = ({parts}) =>{
    return(
      <div>
          {/* <p>{p.parts[0].name} {p.parts[0].exercises}</p>
          <p>{p.parts[1].name} {p.parts[1].exercises}</p>
          <p>{p.parts[2].name} {p.parts[2].exercises}</p> */}
          {parts.map((part,i) => <p key ={i}>{part.name} {part.exercises}</p>)}
          
      </div>
    )
  }


  
  const  Total = ({parts}) =>{


    const total = parts.reduce((s,p) =>
       s+p.exercises,0)


    return(
      <div>
        Total of {total} exercises
      </div>
    )
  }
  



  const Course = ({name,id,parts}) =>{
    return(
         <div>
            <Header name = {name}/>
            <Content parts = {parts}/>
            <Total parts = {parts}/>
        </div>
    )
  }

  export default Course