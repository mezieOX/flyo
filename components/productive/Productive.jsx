import Image from 'next/image'
import React from 'react'

function Productive() {
  return (
      <div className='para h-[300px] max-w-2xl mx-auto mt-40 lg:flex space-x-12 text-center'>
          <div className="lg:w-full"><Image src="/images/illustration-stay-productive.png" width={550} height={340} /></div>
          <div className='lg:w-1/2 space-y-2 my-10 lg:my-0'>
              <h1 className='text-lg md:text-2xl font-[700] lg:text-left'>Stay productive, wherever you are</h1>
              <p className='text-sm font-[600] text-left'>Lorem ipsum psum, dolor sit amet consectetur adip dolor sit amet co</p>
              <p className='text-sm text-left font-[600]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eias,</p>
              <p className='underline text-blue-400 text-left font-[600]'>See how Fylo works</p>
              </div>
    </div>
  )
}

export default Productive