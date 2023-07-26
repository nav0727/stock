
const CountryItem = props => {
  const {countryItem, onVisit} = props
  const {id, name, isVisited} = countryItem
  const changeVisit = () => {
    onVisit(id)
  }

  return (
    <div id={id}>
      <p>{name}</p>

      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button onClick={changeVisit}>
          Visit
        </button>
      )}
    </div>
  )
}

export default CountryItem