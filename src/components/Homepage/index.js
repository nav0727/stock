/* eslint-disable import/no-extraneous-dependencies */
import {Component} from 'react'


import {v4 as uuidv4} from 'uuid'
import StockItem from '../Loginpage'
import SelectedStocks from '../stockspage'

import 'bootstrap/dist/css/bootstrap.css';

import './index.css'


const initial = [
  {
      id:uuidv4(),
      name:"Asian Paints Limited",
      isAdd:false
  },
 {
  id:uuidv4(),
  name: "Axis Bank Ltd.",
  isAdd:false
},
  {
  id:uuidv4(),
  name:"Bajaj Auto Limited",
  isAdd:false
},
  {
      id:uuidv4(),
      name:"Bajaj Finance Ltd.",
      isAdd:false
},
  { id:uuidv4(),name:"Bharti Airtel Ltd."    ,isAdd:false
},

{id:uuidv4(),name:"Britania Ltd" ,isAdd:false},
  {id:uuidv4(),name: "Coal India Ltd."    ,isAdd:false
},
  {id:uuidv4(),name: "Divis Laboratories Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Dr Reddys Laboratories Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"HCL Technologies Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"HDFC Bank Ltd."    ,isAdd:false
},
  { id:uuidv4(),name:"Hindustan Unilever Ltd."    ,isAdd:false
},
  { id:uuidv4(),name:"Housing Development Fin. Corp. Ltd."    ,isAdd:false
},
  {id:uuidv4(),name: "ICICI Bank Ltd."    ,isAdd:false
},
  { id:uuidv4(),name:"Infosys Limited"    ,isAdd:false
},
  { id:uuidv4(),name:"Indian Oil Corporation Ltd."    ,isAdd:false
},
  { id:uuidv4(),name:"Indusind Bank Ltd."    ,isAdd:false
},
  { id:uuidv4(),name:"ITC Ltd."    ,isAdd:false
},

  { id:uuidv4(),name:"Kotak Mahindra Bank Limited"    ,isAdd:false
},

  { id:uuidv4(),name:"Larsen and Toubro Ltd."    ,isAdd:false
},

  {id:uuidv4(),name:"Mahindra & Mahindra Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Maruti Suzuki India Limited"    ,isAdd:false
},


  {id:uuidv4(),name:"Reliance Industries Ltd."    ,isAdd:false
},
 
 
  {id:uuidv4(),name:"State Bank of India"    ,isAdd:false
},
  {id:uuidv4(),name:"Sun Pharmaceutical Industries Ltd."    ,isAdd:false
},


  {id:uuidv4(),name:"Tata Consultancy Services Ltd."    ,isAdd:false
},

  {id:uuidv4(),name:"Tata Steel Ltd."    ,isAdd:false
},

  {id:uuidv4(),name:"UltraTech Cement Limited"    ,isAdd:false
},




  {id:uuidv4(),name:"Titan Company Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Tech Mahindra Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"JSW Steel Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Nestle India Ltd."    ,isAdd:false
},

  {id:uuidv4(),name:"Tata Motors Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Power Grid Corporation of India Ltd."    ,isAdd:false
},

  {id:uuidv4(),name:"Grasim Industries Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"HDFC Life Insurance Company Limited"    ,isAdd:false
},

  {id:uuidv4(),name:"NTPC Limited"    ,isAdd:false
},
  {id:uuidv4(),name:"Hindalco Industries Ltd."    ,isAdd:false
},

  {id:uuidv4(),name:"Adani Ports & Special Economic Zone"    ,isAdd:false
},


  {id:uuidv4(),name:"Cipla Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Tata Consumer Products Limited"    ,isAdd:false
},

  {id:uuidv4(),name:"SBI Life Insurance Company Ltd."    ,isAdd:false
},

  {id:uuidv4(),name:"Bharat Petroleum Corporation Ltd."    ,isAdd:false
},
  {id:uuidv4(), name:"UPL Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Oil & Natural Gas Corporation Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Eicher Motors Ltd."    ,isAdd:false
},
  {id:uuidv4(),name :"Hero MotoCorp Ltd."    ,isAdd:false
},
  {id:uuidv4(), name :"Shree Cement Ltd."    ,isAdd:false
},
  {id:uuidv4(),name:"Wipro Ltd"    ,isAdd:false
}
 ]


class Country extends Component {
  state = {list: initial,searchText:""}

  onSearch=event=>{
    this.setState({searchText:event.target.value})
  }

  onVisit = id => {
    const {list} = this.state
    const visit = list.map(each => {
      if (each.id === id) {
        const updateList = {...each, isAdd: !each.isAdd}
        return updateList
      }
      return each
    })
    this.setState({list: visit})
  }

  remove = id => {
    const {list} = this.state
    const removed = list.map(each => {
      if (each.id === id) {
        const updateList = {...each, isAdd: !each.isAdd}
        return updateList
      }
      return each
    })
    this.setState({list: removed})
  }

  render() {
    const {list,searchText} = this.state
    const updateList = list.filter(stocks => stocks.isAdd === true)
    const searchList=list.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <div className='container'>
<input type="search" placeholder="Search your Stock"  className="search-bar" onChange={this.onSearch} value={searchText}/>


{searchText.length!==0?
<div>
<ul className='search' > <li>Name of the Company</li>
<li>Rating</li>
<li>Selection</li>
</ul>
<ul>
          {searchList.slice(0,4).map(each => (
            <StockItem
              key={each.id}
              stocksItem={each}
              onVisit={this.onVisit}
            />
          ))}
        </ul></div>
        
        :" "
        
  }




       
        <div className='select-items'>
         
          <ul>
            {updateList.map(each => (
              <SelectedStocks key={each.id} stock={each} remove={this.remove} />
            ))}
          </ul>
        
      </div>

      </div>
    )
  }
}


export default Country