
import React,{ useState } from 'react';


const Button =(props)=>{
  return(
  <button onClick={props.onClick}>{props.text}</button>)

}

const StatisticLine =({text,value}) =>{
  return(
   <table>
    <tbody>
      <tr>
        <td>{text}</td>
        <td style={{'paddingLeft':'10px'}}>{value}</td>
      </tr>
    </tbody>
  </table> 
  )
}

const Statistics =({good,neutral,bad}) =>{
  const all = good + bad + neutral
  const average = ((good-bad)/all ).toFixed(2)|| 0
  const positive= ((good/all)*100 ).toFixed(2) + "%"|| 0
  if (all === 0){
    return(<p>No feedback given</p>)
  }
  return(
      <div>
      <StatisticLine  text="good" value={good}/>
      <StatisticLine  text="neutral" value={neutral}/>
      <StatisticLine  text="bad" value={bad}/>
      <StatisticLine  text="all" value={all}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="postive" value={positive}/>
      </div>
  )
}

const App =()=>{

  const [good,setGood] = useState(0)
  const [bad,setBad] = useState(0)
  const [neutral,setNeutral] = useState(0)


  const handleGood =()=>{
    setGood(good +1)}
  const handleBad =()=> {
    setBad(bad+1)}
  const handleNeutral=()=>{
    setNeutral(neutral+1)}

  return(
    <div>
      <h3>Give Feedback</h3>
      <Button onClick={handleGood} text ='good'/>
      <Button onClick={handleNeutral} text ='neutral'/>
      <Button onClick={handleBad} text ='bad'/>
      <h3>Statistics</h3>
      <Statistics good={good} neutral ={neutral} bad ={bad}/>
    </div>

  )


}

export default App;
