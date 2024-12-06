import React from 'react'
import './Items.css';
const Items = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" className="src" />
        <p>
            {props.name}
        </p>
      <div className="items-prices">
        <div className="items-new-prices">{props.new_price}</div>
        <div className="items-old-prices">{props.old_price}</div>
      </div>
    </div>
  )
}

export default Items
