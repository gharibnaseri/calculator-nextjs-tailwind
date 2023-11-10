import React from 'react'

const ButtonMap = ({values}) => {
  return (
    <>
    {values.map(
        (item)=>{return (item.map(
            (btn,i)=>
            {return <button className='ml-2 p-2 shadow-md' key={i}>{btn}</button>}))})}
    
    
    </>


  )
  
}

export default ButtonMap
