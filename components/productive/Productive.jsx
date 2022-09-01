import Image from 'next/image'
import React from 'react'

function Productive() {
  return (
      <div className='para  max-w-5xl mx-auto mt-40 lg:flex lg:space-x-12 items-center text-center mb-40'>
          <div className="lg:w-full"><Image src="/images/illustration-stay-productive.png" width={550} height={340} alt="illustration-stay" /></div>
          <div className='lg:w-[60%] text-center space-y-2 my-10 lg:my-0'>
              <h1 className='text-lg md:text-2xl font-[700] lg:text-left text-left md:text-center'>Stay productive, wherever you are</h1>
              <p className='text-sm font-[600] lg:text-left text-left md:text-center'>Lorem ipsum psum, dolor sit amet consectetur adip dolor sit amet co</p>
              <p className='text-sm lg:text-left font-[600] text-left md:text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eias,</p>
              <p className='text-blue-400 lg:text-left text-left md:text-center text-medium'><span className='rounded-full bg-blue-400 p-px'></span> &nbsp;See how Fylo works </p>
              </div>
    </div>
  )
}

export default Productive