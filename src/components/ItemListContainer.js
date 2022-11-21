import React from 'react'

function ItemListContainer(props) {
  return (
    <p className='text-center font-semibold py-5 font-greeting'>Hello {props.name}, welcome to Electricity shop.</p>
  )
}

export default ItemListContainer