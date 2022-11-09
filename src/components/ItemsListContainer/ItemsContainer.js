import React from 'react'
import './ItemsContainer.css'
const ItemsContainer = (props) => {
  return (
    <div className='message-greeting-container'>
      <h2 className='message'>{props.name}</h2>
    </div>
  )
}

export default ItemsContainer
