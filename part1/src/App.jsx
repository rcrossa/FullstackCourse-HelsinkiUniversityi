const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

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
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App