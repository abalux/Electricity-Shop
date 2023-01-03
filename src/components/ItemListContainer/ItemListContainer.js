import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'


const PRODUCTOS = [
  {id: 1, title: "Remera Wednesday", description: "Remera holgada lisa de color negro", price: 1500, image: "https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {id: 2, title: "Falda Coven", description: "Pollera corta de diseno blanco y negro", price: 2500, image: "https://images.pexels.com/photos/10318493/pexels-photo-10318493.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {id: 3, title: "Top Angels", description: "Top de gamuza color negro", price: 1900, image: "https://images.pexels.com/photos/4717014/pexels-photo-4717014.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {id: 4, title: "Jean Mystic", description: "Jean skinny color azul", price: 2000, image: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=600"}
]


const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
        getProducts()
        .then( res => {
          console.log(res)
          setItems( res )
        })
        .catch( err => {
          console.log( err )
        })
  }, [])

  const getProducts = () => {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve ( PRODUCTOS )
      }, 2000);
        
    })
  }

  return (
    <div className='flex flex-row justify-around'>
      { items.map( i => <ItemCard key={i.id}{...i} />)}
    </div>
  )
}


export default ItemListContainer
export { PRODUCTOS }