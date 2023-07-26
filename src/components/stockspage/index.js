import './index.css'
const SelectedStocks = props => {
  const {stock, remove} = props
  const {id, name} = stock
  const removeCountry = () => {
    remove(id)
  }
  return (
    <div id={id} className="select-container">
      
        <p>{name}</p>
        <button onClick={removeCountry} className='btn btn-danger'>
          Remove
        </button>
      </div>
  
  )
}

export default SelectedStocks