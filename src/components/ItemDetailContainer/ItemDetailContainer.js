import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTOS } from '../ItemListContainer/ItemListContainer'

const ItemDetailContainer = () => {
  
    const [item, setItem] = useState({})

    const { id } = useParams()
  
    useEffect(() => {
        getItemDetail().then( res => {
            setItem( res)
        })
        
    }, [ id ])

    const getItemDetail = () => {
        return new Promise( (resolve, reject) => {
            const item = PRODUCTOS.find( p => p.id == id)
            setTimeout(() => {
                resolve ( item )
            }, 3000);
        })
    }

    return (
        <div>
            <h1>Detalles del producto : { id} </h1>
            <li>{item.title}</li>
            <li>{item.description}</li>
            <li>{item.price}</li>
        </div>




  )
}

export default ItemDetailContainer
