import React from 'react'
import { Link } from 'react-router-dom'


export const ItemCard = ( {image, id, title, price}) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl mt-6 ">
      <figure><img src={image} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/item/${id}`} className="btn">Ver más detalles</Link>
        </div>
      </div>
    </div>
    //<div className='m-5 p-5 bg-gray-400 w-52'>
     // <div>{title}</div>
     // <div>{description}</div>
     // <div>{price}</div>
    //  <Link to={`/item/${id}`}  classname="btn">Ver detalle</Link>
    //</div>
  )
}

export default ItemCard
