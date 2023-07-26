import './index.css';


const StockItem = props => {
  const {stocksItem, onVisit} = props // 
  const {id, name, isAdd} = stocksItem
  const changeVisit = () => {
    onVisit(id)
  }

  return (
    <div id={id} className="search">
      <p>{name}</p>

      {isAdd ? (
        <p>added</p>
      ) : (
        <button onClick={changeVisit} className="btn btn-success">
          Add
        </button>
      )}
    </div>
  )
}

export default StockItem