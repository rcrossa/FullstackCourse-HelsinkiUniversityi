const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
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
          <div key={part.id}>
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