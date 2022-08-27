import Image from 'next/image'
import React from 'react'

function Illustration() {
  return (
      <div className='mx-auto max-w-xl z-0 text-center'>
          <Image src="/images/illustration-intro.png" alt="illustration-intro" width={550} height={340} />
    </div>
  )
}

export default Illustration