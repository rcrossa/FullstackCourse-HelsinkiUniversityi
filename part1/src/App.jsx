const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

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

  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part =>
          <div>
            Name: {part.name}
            <p>
              exercises: {part.exercises}
            </p>
          </div>
        )}
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
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App