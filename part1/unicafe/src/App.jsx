import { useState } from 'react'

const Button = ({label, value, setter}) => {
  return (
    <button onClick={() => setter(value+1)}>
      {label}
    </button>
  )
}

const StatisticLine = ({label, value}) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({values}) => {
  if(values[0]+values[1]+values[2] === 0){
    return (
      <>
        <h1>Statistics</h1> 
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
      <tbody>
        <StatisticLine label={"good"} value={values[0]} />
        <StatisticLine label={"neutral"} value={values[1]} />
        <StatisticLine label={"bad"} value={values[2]} />
        <StatisticLine label={"all"} value={values.reduce((partialSum, a) => partialSum + a, 0)} />
        <StatisticLine label={"average"} value={(values[0]-values[2])/(values[0]+values[1]+values[2])} />
        <StatisticLine label={"positive"} value={values[0]/(values[0]+values[1]+values[2])} />
      </tbody>
      </table>
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
      <Statistics values={[good, neutral, bad]} />
      </>
  )
}

export default App
