import { useState } from "react"


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Display = ({ counter }) => {
  return (

    <table style={{ display: "flex", flexDirection: 'row', borderCollapse: 'separate', marginBottom: '1rem' }}>
      <tbody style={{ display: "flex" }}>
        <tr>
          <td style={{ alignContent: "flex-end" }}>{counter}</td>
        </tr>
      </tbody>
    </table>

  )
}
const App = () => {
  const [selected, setSelected] = useState([])
  const [votes, setVotes] = useState([])
  const [votesSelected, setVotesSelected] = useState(0)
  const [final, setFinal] = useState([]);



  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const random = () => {
    let data;
    data = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdotes[data])
  }

  const vote = () => {
    setVotes((prevArray) => [...prevArray, selected])
    setVotesSelected(votesSelected + 1)

  }

  const calculationVotes = () => {
    const frequency = {};

    votes.forEach(element => {
      frequency[element] = (frequency[element] || 0) + 1;
    });

    let repeat = null;
    let maximunFrecuency = 0;

    for (const element in frequency) {
      if (frequency[element] > maximunFrecuency) {
        repeat = element;
        maximunFrecuency = frequency[element];
      }
    }


    if (maximunFrecuency > 1) {
      setFinal(`The element is (${maximunFrecuency} votes) is: ${repeat} .`);
    }


  }

  return (
    <div>
      <h1>Phrase</h1>
      <Display counter={selected} />
      <h2>Votes</h2>
      <Display counter={votesSelected} />
      <h2>anecdote with most votes</h2>
      <Display counter={final} />
      <Button onClick={random} text="next anecdote" />
      <Button onClick={vote} text="vote" />
      <Button onClick={calculationVotes} text="calculation" />
    </div>
  )
}

export default App