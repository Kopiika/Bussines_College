import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const handleClickGood = () => setGood (good + 1)

  const [neutral, setNeutral] = useState(0)
  const handleClickNeutral = () => setNeutral (neutral + 1)

  const [bad, setBad] = useState(0)
  const handleClickBad = () => setBad (bad + 1)

  return (
    <div>
      <h2>Give feedback</h2>

      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />
  
      <h2>Statistics</h2>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
    </div>
  )
}

export default App