// import React from 'react'

// function Logo({width='20px'}) {
//   return (
//     <div>Logo</div>
//   )
// }

// export default Logo

import React from 'react'
import blog1 from "../assets/images/blog1.png"

function Logo({ width = '100px', height = '50px' }) {
  return (
    <div className='flex justify-center items-center gap-2 '>
      <img 
       src={blog1}
       alt="logo"
       style={{ 
        width: width, 
        height: height, 
        maxWidth: '100%', 
        maxHeight: '100%' 
      }} />
      <p className='font-semibold text-2xl '>BlogSpot</p>
    </div>
  )
}

export default Logo

// https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNDktMjIucG5n.png
