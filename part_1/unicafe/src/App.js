
//1.6
// const Button = ({onclick,text}) =>{
//   return(
//     <div>
//       <button onClick={onclick}>
//         {text}
//       </button>
//     </div>
//   )
// }


// const Display = ({text, value}) =>{
//   return(
//     <div>
//       {text}, {value}
//     </div>
//   )
    
// }

// const App  = () => {
//   const [good ,setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
  
//   const goodClick = ()=>{
//     setGood(good + 1)

//   }


//   const neutralClick = () =>{
//     setNeutral(neutral + 1)
//   }

//   const badClick = () =>{
//     setBad(bad + 1)
//   }


//   return(
//     <div>
//       <h1>
//         Give Feedback
//       </h1>

//       <Button onclick={goodClick} text={"good"}/>
//       <Button onclick={neutralClick} text={"neutral"}/>
//       <Button onclick={badClick} text={"bad"}/>
      
//       <h1>
//         Statistics
//       </h1>
//       <Display text = {"good"} value = {good}/>
//       <Display text = {"neutral"} value = {neutral}/>
//       <Display text = {"bad"} value = {bad}/>
//     </div>
//   )


// }

//1.7 unicafe step 2
// const Button = ({click,text}) =>{
//   return(
//     <div>
//       <button onClick={click}>
//         {text}
//       </button>
//     </div>
//   )
// }


// const Display = ({text,value}) =>{

//   return (
//     <div>
//       {text},{value}
//     </div>
//   )
// }


// const App = () =>{
//  const [good, setGood] = useState(0)
//  const [neutral, setNeutral] = useState(0)
//  const [bad, setBad] = useState(0)

//  const GoodClick = () => {
//   setGood(good + 1)
//  }

//  const NeutralClick = () =>{
//   setNeutral(neutral + 1)
//  }


//  const BadClick = () =>{
//   setBad(bad + 1)
//  }

//  return(
//   <div>
//     <h1>
//       Give Feedback
//     </h1>
    
//     <Button click={GoodClick} text={"good"}/>
//     <Button click={NeutralClick} text={"neutral"}/>
//     <Button click={BadClick} text={"bad"}/>
    
//     <h1>
//       Statistics
//     </h1>

// <Display text={"good"} value={good}/>
// <Display text={"neutral"} value={neutral}/>
// <Display text={"bad"} value={bad}/>


// <p>
//   Average {(good - bad)/(good + neutral + bad)}
// </p>
// <p>
//   Postive { (good / (good + neutral +bad)) * 100} %
// </p>


//   </div>
//  )
// }



//1.8 unicafe step 3

// const Button = ({click,text}) =>{
//   return(
//     <div>
//       <button onClick={click}>
//         {text}
//       </button>
//     </div>
//   )
// }


// const Statistics= ({text,value}) =>{

//   return (
//     <div>
//       {text},{value}
//     </div>
//   )
// }


// const App = () =>{
//  const [good, setGood] = useState(0)
//  const [neutral, setNeutral] = useState(0)
//  const [bad, setBad] = useState(0)

//  const GoodClick = () => {
//   setGood(good + 1)
//  }

//  const NeutralClick = () =>{
//   setNeutral(neutral + 1)
//  }


//  const BadClick = () =>{
//   setBad(bad + 1)
//  }

//  return(
//   <div>
//     <h1>
//       Give Feedback
//     </h1>
    
//     <Button click={GoodClick} text={"good"}/>
//     <Button click={NeutralClick} text={"neutral"}/>
//     <Button click={BadClick} text={"bad"}/>
    
//     <h1>
//       Statistics
//     </h1>

// <Statistics text={"good"} value={good}/>
// <Statistics text={"neutral"} value={neutral}/>
// <Statistics text={"bad"} value={bad}/>


// <p>
//   Average {(good - bad)/(good + neutral + bad)}
// </p>
// <p>
//   Postive { (good / (good + neutral +bad)) * 100} %
// </p>


//   </div>
//  )
// }



//1.9 unicafe step 4
//1.9 unicafe step 4



// const Button = ({click,text}) =>{
//   return(
//     <div>
//       <button onClick={click}>
//         {text}
//       </button>
//     </div>
//   )
// }


// const Statistics= ({good, neutral, bad}) =>{
//   if (good === 0 && neutral === 0 && bad === 0){
//     return(
//     <p>

//       No feedback given

//     </p>
//     )
//     }
//     else{
//   return (
//     <div>
//       <p>good,{good}</p>
//       <p>neutral,{neutral}</p>
//       <p>bad,{bad}</p>
//     </div>
//   )
// }
// }


// const Display = ({good,neutral,bad}) =>{
//   if (good === 0 && neutral === 0 && bad === 0){
//     return(
//     <p>
//     </p>
//     )
//     }
//     else{
//     return(
//       <div>
//       <p>
//       Average {(good - bad)/(good + neutral + bad)}
//     </p>
    
    
//     <p>
//     Postive { (good / (good + neutral +bad)) * 100} %
//     </p>
//     </div>
//     )
// }
// }

// const App = () =>{
//  const [good, setGood] = useState(0)
//  const [neutral, setNeutral] = useState(0)
//  const [bad, setBad] = useState(0)

//  const GoodClick = () => {
//   setGood(good + 1)
//  }

//  const NeutralClick = () =>{
//   setNeutral(neutral + 1)
//  }


//  const BadClick = () =>{
//   setBad(bad + 1)
//  }

//  return(
//   <div>
//     <h1>
//       Give Feedback
//     </h1>
    
//     <Button click={GoodClick} text={"good"}/>
//     <Button click={NeutralClick} text={"neutral"}/>
//     <Button click={BadClick} text={"bad"}/>
    
//     <h1>
//       Statistics
//     </h1>

// <Statistics text={"good"} good={good} neutral={neutral} bad={bad}/>

// <Display good = {good} bad = {bad} neutral = {neutral}/>

//   </div>
//  )
// }




//1.10 unicafe step 5
//1.10 unicafe step 5


// const Button = ({click,text}) =>{
//   return(
//     <div>
//       <button onClick={click}>
//         {text}
//       </button>
//     </div>
//   )
// }

// const Statistics = ({good,neutral,bad}) => {
//   //console.log(`props.a: ${props.a}, props.n: ${props.n}, props.b: ${props.b}`);
//   if (good === 0 && neutral === 0 && bad === 0) {
//     return (
//       <p>
//         No Feedback Given
//       </p>
//     );
//   } else {
//     return (
//       <div>
//         <StatisticLine text="good" value={good} />
//         <StatisticLine text="neutral" value={neutral} />
//         <StatisticLine text="bad" value={bad} />
//       </div>
//     );
//   }
// };


// const StatisticLine = ({text,value}) =>{
//   return (
//     <div>
//        {text},{value}
//     </div>
//    )

// }

// const Display = ({good,neutral,bad}) =>{
//   if (good !== 0 && neutral !== 0 && bad !== 0){
//       return(
//         <div>
//         <p>
//         Average {(good - bad)/(good + neutral + bad)}
//       </p>
      
      
//       <p>
//       Postive { (good / (good + neutral +bad)) * 100} %
//       </p>
//       </div>
//       )
// }
// }

// const App = () =>{
//  const [good, setGood] = useState(0)
//  const [neutral, setNeutral] = useState(0)
//  const [bad, setBad] = useState(0)

//  const GoodClick = () => {
//   setGood(good + 1)
//  }

//  const NeutralClick = () =>{
//   setNeutral(neutral + 1)
//  }


//  const BadClick = () =>{
//   setBad(bad + 1)
//  }



//  return(
//   <div>
//     <h1>
//       Give Feedback
//     </h1>
    
//     <Button click={GoodClick} text={"good"}/>
//     <Button click={NeutralClick} text={"neutral"}/>
//     <Button click={BadClick} text={"bad"}/>
    
//     <h1>
//       Statistics
//     </h1>

// <Statistics good = {good} bad = {bad} neutral = {neutral}/>

// <Display good = {good} bad = {bad} neutral = {neutral}/>

//   </div>
//  )
// }

//1.11
//1.11
//1.11
import { useState } from "react";
const Button = ({click,text}) =>{
  return(
    <div>
      <button onClick={click}>
        {text}
      </button>
    </div>
  )
}

const Statistics = ({good,neutral,bad}) => {
  //console.log(`props.a: ${props.a}, props.n: ${props.n}, props.b: ${props.b}`);
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>
        No Feedback Given
      </p>
    );
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
              <StatisticLine text="good" value={good} />
              </td>
            </tr>
            <tr>
              <td>
              <StatisticLine text="neutral" value={neutral} />
              </td>
            </tr>
            <tr>
              <td>
              <StatisticLine text="bad" value={bad} />
              </td>
            </tr>
<tr>
  <td>
    <StatisticLine text = "all" value= {good + neutral + bad }/>
  </td>
</tr>
            <tr>
              <td>
              <Display good = {good} bad = {bad} neutral = {neutral}/>
              </td>
            </tr>
          </tbody>
        </table>
        

      </div>
    );
  }
};


const StatisticLine = ({text,value}) =>{
  return (
    <div>
       {text}  {value}
    </div>
   )

}

const Display = ({good,neutral,bad}) =>{
  if (((good + neutral + bad)) !== 0){
      return(
        <div>
        <p>
        Average {(good - bad)/(good + neutral + bad)}
      </p>
      
      
      <p>
      Postive { (good / (good + neutral +bad)) * 100} %
      </p>
      </div>
      )
}
}

const App = () =>{
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)

 const GoodClick = () => {
  setGood(good + 1)
 }

 const NeutralClick = () =>{
  setNeutral(neutral + 1)
 }


 const BadClick = () =>{
  setBad(bad + 1)
 }



 return(
  <div>
    <h1>
      Give Feedback
    </h1>

    <div style={{ display: 'flex' }}>  
      <Button click={GoodClick} text={"good"}/>
      <Button click={NeutralClick} text={"neutral"}/>
      <Button click={BadClick} text={"bad"}/>
    </div>

    <h1>
      Statistics
    </h1>

<Statistics good = {good} bad = {bad} neutral = {neutral}/>

  </div>
 )
}

export default App