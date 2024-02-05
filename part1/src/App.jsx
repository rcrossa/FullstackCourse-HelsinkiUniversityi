const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Part = (props) => {
    return (
      <>
        <p>
          {props.part}
        </p>
      </>
    )
  }
  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part />
        <Part />
        <Part />
      </div>
    )
  }

  const Total = () => {
    return (
      <><p>
        Total
      </p></>
    )
  }
  return (
    <div>

    </div>
  )
}

export default App