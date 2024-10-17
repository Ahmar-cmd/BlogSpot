import React from 'react'
import blog1 from "../assets/images/blog1.png"

function Logo({ width = '50px', height = '50px' }) {
  return (
    <div className='flex justify-center items-center gap-2 '>
      <img 
       src={blog1}
       alt="logo"
       style={{ 
        width: width, 
        height: height, 
        maxWidth: '100%', 
        maxHeight: '100%', 
      }} />
      <p className='font-semibold text-2xl '>BlogSpot</p>
    </div>
  )
}

export default Logo