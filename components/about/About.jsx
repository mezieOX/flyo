import React from 'react'
import Access from '../icons/Access'
import AccessInt from '../icons/AccessInt'
import Collaboration from '../icons/Collaboration'
import Curvy from '../icons/Curvy'
import Phones from '../icons/Phones'
import Security from '../icons/Security'

function About() {
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center  para max-w-7xl mx-auto md:space-x-8'>
          <div className='text-center'>
              <div className='mt-10 flex justify-center'>
                  <AccessInt className="text-center" />
              </div>
              <div>
                  <h2 className='font-[600] mt-5 text-xl py-2 capitalize'>access your files, anywhere</h2>
                  <p className='font-[600]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde excepturi quam exercitationem ab animi, architecto esse reiciendis officiis!</p>
              </div>
          </div>
          <div className='text-center'>
              <div className='mt-20 flex justify-center md:mt-[60px]'>
                  <Security className="text-center" />
              </div>
              <div>
                  <h2 className='font-[600] mt-5 text-xl py-2 capitalize'>access your files, anywhere</h2>
                  <p className='font-[600]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde excepturi quam exercitationem ab animi, architecto esse reiciendis officiis!</p>
              </div>
          </div>
          <div className='text-center'>
              <div className='mt-20 flex justify-center'>
                  <Collaboration className="text-center" />
              </div>
              <div>
                  <h2 className='font-[600] mt-5 text-xl py-2 capitalize'>access your files, anywhere</h2>
                  <p className='font-[600]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde excepturi quam exercitationem ab animi, architecto esse reiciendis officiis!</p>
              </div>
          </div>
          <div className='text-center'>
              <div className='mt-20 flex justify-center'>
                  <Access className="text-center" />
              </div>
              <div>
                  <h2 className='font-[600] mt-5 text-xl py-2 capitalize'>access your files, anywhere</h2>
                  <p className='font-[600]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde excepturi quam exercitationem ab animi, architecto esse reiciendis officiis!</p>
              </div>
          </div>
    </div>
  )
}

export default About