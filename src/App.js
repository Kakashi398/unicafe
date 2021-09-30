import { useState } from "react";

const Statistics = ({good, neutral, bad}) =>{

  
  const all = good + neutral +bad
  const average = all / 3
  const positive = (good + neutral) / 3 * 100

  if(good === 0 && neutral ===0 && bad ===0){
    return (
      <div>
        no feedback given
      </div>
    )
  } 


  return(
    <div>
      <h1>statistics</h1>

<p>good {good}</p>
<p>neutral {neutral}</p>
<p>bad {bad}</p>
<p>all {all}</p>
<p>average {average}</p>
<p>positive {positive} %</p>

    </div>
  )
}





const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodClick = () => {
    setGood(good)
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral)
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad)
    setBad(bad + 1)
  }
  
  
  
  return(
    <div>
      <h1>give feedback</h1>
      
      
      <button onClick={goodClick} >good</button>

      <button onClick={neutralClick}>neutral</button>

      <button onClick={badClick}>bad</button>

    < Statistics good={good} neutral={neutral} bad={bad} />
    </div>  
  )
}



export default App;
