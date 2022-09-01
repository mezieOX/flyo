import LocationOnIcon from '@material-ui/icons/LocationOn';
import MessageIcon from '@material-ui/icons/Message';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIconIcon from '@material-ui/icons/TwitterIcon';
import FacebookIcon from '@material-ui/icons/Facebook';  

function Footer() {
  return (
      <div className="bg-gray-100 py-20 bg-gray-900 lg:flex items-center relative lg:justify-between pt-60 px-2 pb-4 gap-x-8">
      <div className="text-4xl font-bold font-mono my-10 flex-grow lg:text-center">Fylo</div>
      <div className='space-y-8'>
      <div className='flex items-center text-white gap-4 '>
        <LocationOnIcon className="!text-4xl !text-white" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sunt officia suscipit facilis saepe.</p>
      </div>
      <div  className='flex items-center text-white gap-4'>
        <PhoneIcon className="!text-4xl !text-white" />
        <p>+234 7030 822 450</p>
      </div>
      <div  className='flex items-center text-white gap-4'>
        <MessageIcon className="!text-4xl !text-white" />
        <p>meziepage@gmail.com</p>
        </div>
        </div>
      <div className="space-y-8 mt-8 lg:flex lg:items-start lg:space-y-0 lg:mt-0 lg:space-x-8 capitalize flex-grow">
      <div className='text-white'>
        <h5 className='capitalize'>about us</h5>
        <p>blog</p>
        <p>press</p>
        <p>jobs</p>
      </div>
      <div  className="text-white">
        <h5 className='capitalize'>contact us</h5>
        <p>terms</p>
        <p>privacy</p>
        </div>
      </div>
      <div className='flex items-center justify-center w-full lg:w-40 space-x-4'>
        <div><FacebookIcon className="p-2 rounded-full border !text-white !text-4xl" /></div>
        <div><InstagramIcon className="p-2 rounded-full border !text-white !text-4xl" /></div>
        <div><TwitterIcon className="p-2 rounded-full border !text-white !text-4xl" /></div>
      </div>
         </div>
  )
}

export default Footer