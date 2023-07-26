
const CountriesMap = props => {
  const {map, remove} = props
  const {id, name, imageUrl} = map
  const removeCountry = () => {
    remove(id)
  }
  return (
    <div id={id}>
      <img src={imageUrl} alt="thumbnail" />
      <div>
        <p>{name}</p>
        <button onClick={removeCountry}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CountriesMap