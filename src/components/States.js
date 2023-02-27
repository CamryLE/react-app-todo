const States = ({setActive, setAll, setCompleted}) => {
  return (
    <ul className="states">
        <li onClick={setAll}>All</li>
        <li onClick={setActive} className="">Active</li>
        <li onClick={setCompleted}>Completed</li>
    </ul>
  )
}

export default States
