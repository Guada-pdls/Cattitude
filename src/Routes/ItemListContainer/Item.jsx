import React from 'react'
import {AiOutlineRight} from "react-icons/ai"

const Item = ({item}) => {
  return (
    <div className='card'>
        <div className="img"><img src={item.img} alt={item.title} /></div >
        <h4>{item.title}</h4>
        <p className='price'>${item.price}</p>
        <div className='viewMore'>View more <AiOutlineRight/></div>
    </div>
  )
}

export default Item