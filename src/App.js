import { useState } from "react";

const Statistics = ({good, neutral, bad}) =>{

  
  const all = good + neutral +bad
  const average = all / 3
  const positive = (good + neutral) / 3 * 100

  if(good === 0 && neutral ===0 && bad ===0){
    return (
      <div>
       <p>
       no feedback given
       </p>
      </div>
    )
  } 


  return(
    <div>
      <h1>statistics</h1>

<StatisticsLine text="good" value= {good} />
<StatisticsLine text="neutral" value= {neutral} />
<StatisticsLine text="bad" value= {bad} />
<StatisticsLine text="average" value= {average} />
<StatisticsLine text="positive" value= {positive + " %"} />
    </div>
  )
}

const StatisticsLine = ({text, value}) => {
  
  return(
     <div>
       {text} {value}
     </div>
  )
}

const Button = ({handleClick, text}) => {
  
  return(
    <button onClick={handleClick}>
    {text}
  </button>
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
      
      
      < Button handleClick={goodClick} text="good" />

      <Button handleClick={neutralClick} text="neutral" />

      < Button handleClick={badClick} text="bad" />

      <Statistics  good={good} neutral={neutral} bad={bad} />
      
    </div>  
  )
}



export default App;
