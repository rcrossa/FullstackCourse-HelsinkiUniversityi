const App = () => {

  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }

  const Content = () => {
    return (
      <>
        <p>
          Content
        </p>
      </>
    )
  }

  const Total = () => {
    return (
      <><p>
        Total
      </p></>
    )
  }
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App