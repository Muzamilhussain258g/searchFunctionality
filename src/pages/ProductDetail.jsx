import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let {id} = useParams();
    console.log(id)

  return (
    <div>ProductDetail {id}</div>
  )
}

export default ProductDetail