import { useState } from 'react'

const Button = ({label, value, setter}) => {
  return (
    <button onClick={() => setter(value+1)}>
      {label}
    </button>
  )
}

const Stat = ({label, value}) => {
  return (
    <>
    <p>{label} {value}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give feedback</h1>
      <Button label={"good"} value={good} setter={setGood} />
      <Button label={"neutral"} value={neutral} setter={setNeutral} />
      <Button label={"bad"} value={bad} setter={setBad} />
      <h1>Statistics</h1>
      <Stat label={"good"} value={good} />
      <Stat label={"neutral"} value={neutral} />
      <Stat label={"bad"} value={bad} />
      </>
  )
}

export default App
