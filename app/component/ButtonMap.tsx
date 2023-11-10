import React from 'react'

const ButtonMap = ({values}) => {
  


   
  return (
    <>
    {values.map(
        (item)=>{return (item.map(
            (btn,i)=>
            {return <button 
           className=' p-2.5 shadow-md flex justify-center content-center  text-2xl bg-[#e9f0f9] hover:bg-sky-200' key={i}>{btn}</button>}))})}
            
    
    </>


  )
  
}

export default ButtonMap
