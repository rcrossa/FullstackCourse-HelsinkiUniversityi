import { useState, useEffect } from "react"


const Display = ({ counter, text }) => <div>{text} {counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setALL] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const increaseByGood = () => {
    setGood(good + 1);
    setALL(all + 1);

  };
  const increaseByNeutral = () => {
    setNeutral(neutral + 1)
    setALL(all + 1);
  };
  const increaseByBad = () => {
    setBad(bad + 1)
    setALL(all + 1);
  };

  useEffect(() => {
    if (isNaN(average)) {
      setAverage(0);
      console.log("test")
    }
    let dataPositive = (good * 100) / all;
    setPositive(dataPositive);
    let data = (good + neutral + bad) / 3;
    setAverage(data);

  }, [good, all, neutral, bad]);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseByGood} text='good' />
      <Button onClick={increaseByNeutral} text='neutral' />
      <Button onClick={increaseByBad} text='bad' />
      <h1>stactistics</h1>
      <Display counter={good} text='good' />
      <Display counter={neutral} text='neutral' />
      <Display counter={bad} text='bad' />
      <Display counter={all} text='all' />
      <Display counter={average} text='average' />
      <Display counter={positive} text='positive' />

    </div>
  )
}

export default App