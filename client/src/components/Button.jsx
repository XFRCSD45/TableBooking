import React from 'react'

const Button = ({handleClick}) => {
  return (
    
      <button className="h-fit w-fit mt-10 rounded-2xl p-5 bg-red-600 text-white font-bold"  onClick={handleClick}  >  
      Delete Booking
    </button>
    
  )
}

export default Button
