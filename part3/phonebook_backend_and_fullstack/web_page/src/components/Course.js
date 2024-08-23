import React from "react";



const Header = (c) => {
    return(
      <div>
        <p>
          {c.name}
        </p>
      </div>
    )
  }
  
  const Content = (p) =>{
    return(
      <div>
          <p>{p.parts[0].name} {p.parts[0].exercises}</p>
          <p>{p.parts[1].name} {p.parts[1].exercises}</p>
          <p>{p.parts[2].name} {p.parts[2].exercises}</p>
      </div>
    )
  }

  
  const Course = (props) =>{
    return(
         <div>
            <Header name = {props.course.name}/>
            <Content parts = {props.course.parts}/>
        </div>
    )
  }

  export default Course