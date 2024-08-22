//1.3-------------------------------------------------------------------------

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <p>{course}</p>
//       <p>
//         {part1.name}{part1.exercises}
//       </p>
//       <p>
//         {part2.name}{part2.exercises}
//       </p>
//       <p>
//         {part3.name}{part3.exercises}
//       </p>
//       <p>
//       Number of exercises {part1.exercises + part2.exercises + part3.exercises}
//       </p>
//     </div>
//   )
// }
//export default App

//1.4-------------------------------------------------------------------------

// const Header = (c) => {
//   return(
//     <div>
//       <p>
//         {c.course}
//       </p>
//     </div>
//   )
// }

// const Content = (p) =>{
//   return(
//     <div>
//         <p>{p.parts[0].name}{p.parts[0].exercises}</p>
//         <p>{p.parts[1].name}{p.parts[1].exercises}</p>
//         <p>{p.parts[2].name}{p.parts[2].exercises}</p>
//     </div>
//   )
// }

// const Total = (to) =>{
//   return(
//     <div>
// <p>
//   {to.parts[0].exercises + to.parts[1].exercises + to.parts[2].exercises}
// </p>
//     </div>
//   )

// }

// const App=()=>{
//   const course = "Half Stack application development"
//   const parts = [
//     {
//       name: "fundamentals of react",
//       exercises: 10
//     },
//     {
//       name:"using props to pass data",
//       exercises: 7
//     },
//     {
//       name: "state of a component",
//       exercises: 14
//     }
//   ]



//   // parts.map
//   return(
//     <div>
//       <Header  course = {course}/>
//       <Content parts = {parts}/>
//       <Total parts = {parts}/>

//     </div>
//   )
// }
//export default App


//1.5-------------------------------------------------------------------------

//1.5-------------------------------------------------------------------------

//1.5-------------------------------------------------------------------------


const Header = (c) => {
  return(
    <div>
      <p>
        {c.course.name}
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

const Total = (to) =>{
  return(
    <div>
<p>
  {to.parts[0].exercises + to.parts[1].exercises + to.parts[2].exercises}
</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
    <Header  course = {course}/>
    <Content parts = {course.parts}/>
    <Total parts = {course.parts}/>
    </div>
  )
}

export default App
