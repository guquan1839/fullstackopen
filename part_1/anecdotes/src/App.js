
import { useState } from "react";


//1.12
//1.12
//1.12
//1.12

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]

//   const [selected, setSelected] = useState(0)

//   const random_selected = ()=>{
//     setSelected(generate_random_number())
//   }

//   const generate_random_number = () =>{
//     const a = Math.floor(Math.random()*anecdotes.length)
//     //console.log(a)
//     return a
//   }

//   return (
//     <div>
//       <p>
//       {anecdotes[selected]}
//       </p>
//       <button onClick={random_selected}>
//         next anecdote
//       </button>
//     </div>
//   )
// }
// export default App;

//1.13
//1.13
//1.13
//1.13


// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]

//   const [selected, setSelected] = useState(0)
//   const [points, setPoints] = useState(new Uint8Array(anecdotes.length));

//   const ADD = () => {
//     const newPoints = [...points];
//     newPoints[selected] += 1; 
//     setPoints(newPoints); 
//   };
//   const random_selected = ()=>{
//     setSelected(generate_random_number())
//   }

//   const generate_random_number = () =>{
//     const a = Math.floor(Math.random()*anecdotes.length)
//     //console.log(a)
//     return a
//   }


//   return (
//     <div>
//       <p>
//       {anecdotes[selected]}
//       </p>

//       <p>
//         has {points[selected]} votes
//       </p>

//       <button onClick={ADD}>
//         Vote
//       </button>

//       <button onClick={random_selected}>
//         next anecdote
//       </button>
//     </div>
//   )
// }
// export default App;




//1.14
//1.14
//1.14
//1.14

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));
  const [max, setMax] = useState(0)

  const ADD = () => {
    const newPoints = [...points];
    newPoints[selected] += 1; 
    setPoints(newPoints); 
    Max_vote(newPoints);
    // console.log('add_af',points)
    // console.log('add_a2',newPoints)
  };

  
  const random_selected = ()=>{
    setSelected(generate_random_number())
  }

  const generate_random_number = () =>{
    const a = Math.floor(Math.random()*anecdotes.length)    
    //console.log(a)
    return a
  }

  const Max_vote = (newPoints) =>{
    const max_value = Math.max(...newPoints)


    // console.log('max',...newPoints)
    // console.log(max_value)

    const max_index = newPoints.findIndex(value => value === max_value)
    // console.log(max_index)
    setMax(max_index)
  }


  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>

      <p>
      {anecdotes[selected]}
      </p>

      <p>
        has {points[selected]} votes
      </p>

      <button onClick={ADD}>
        Vote
      </button>

      <button onClick={random_selected}>
        next anecdote
      </button>


      <h1>
        Anecdote with most votes
      </h1>

      <p>
        {anecdotes[max]}
      </p>
        has   {points[max]}  votes


    </div>
  )
}




export default App;
