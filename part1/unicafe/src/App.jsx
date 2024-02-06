import { useState, useEffect } from "react"


const Display = ({ counter, text }) => {
  return (
    <>
      <table style={{ display: "flex", flexDirection: 'row', borderCollapse: 'separate', borderSpacing: '2em 0em' }}>
        <tbody style={{ display: "flex" }}>
          <tr>
            <td style={{ alignContent: "flex-end", width: '50px' }}>{text}</td>
            <td style={{ alignContent: "flex-end" }}>{counter}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Stactistics = ({ good, neutral, bad, all, average, positive }) => {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Stastistics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Display counter={good} text='good' />
            </td>
          </tr>
          <tr>
            <td>
              <Display counter={neutral} text='neutral' />
            </td>
          </tr>
          <tr>
            <td>
              <Display counter={bad} text='bad' />
            </td>
          </tr>
          <tr>
            <td>
              <Display counter={all} text='all' />
            </td>
          </tr>
          <tr>
            <td>
              <Display counter={average} text='average' />
            </td>
          </tr>
          <tr>
            <td>
              <Display counter={positive} text='positive' />
            </td>
          </tr>
        </tbody>
      </table >
    </>
  )
}

const Buttonbox = ({ increaseByGood, increaseByNeutral, increaseByBad, resultReset }) => {
  return (
    <>
      <Button onClick={increaseByGood} text='Good' />
      <Button onClick={increaseByNeutral} text='Neutral' />
      <Button onClick={increaseByBad} text='Bad' />
      <Button onClick={resultReset} text='consultar' />
      <Button onClick={resultReset} text='Reset' />
    </>
  )

}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setALL] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [final, setFinal] = useState(false);

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
  const finFeedback = () => {
    setFinal(true);
  }
  const resultReset = () => {
    setFinal(false);
    setGood(0);
    setNeutral(0);
    setBad(0);
    setALL(0);
    setAverage(0);
    setPositive(0);
  }

  useEffect(() => {
    if (isNaN(average)) {
      setAverage(0);
    }
    let dataPositive = (good * 100) / all;
    setPositive(dataPositive);
    let data = (good + neutral + bad) / 3;
    setAverage(data);

  }, [good, all, neutral, bad, average]);

  if (final) {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Buttonbox increaseByGood={increaseByGood} increaseByNeutral={increaseByNeutral} increaseByBad={increaseByBad} resultReset={resultReset} />
        <Stactistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Buttonbox increaseByGood={increaseByGood} increaseByNeutral={increaseByNeutral} increaseByBad={increaseByBad} resultReset={finFeedback} />
        <h1>Stactistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

export default App