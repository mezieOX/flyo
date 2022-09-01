import Button from "../ui/button/Button"

function Newsletter() {
  return (
      <div className="para max-w-2xl mx-auto flex flex-col items-center justify-center mt-20 text-white bg-gray-800 shadow-2xl md:rounded shadow-xl z-0 md:border">
          <div className="text-center px-5 md:px-20 pb-10">
                  <h2 className='font-[600] mt-5 text-lg md:text-xl py-2 capitalize'>Get early access today</h2>
                  <p className='font-[500] text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta esse omnis ea pariatur expedita nam ducimus nihil perferendis, unde hic minus et aperiam quis eligendi. Optio ab corrupti sit. </p>
          </div>
          <div className="px-3 md:px-12 w-full space-x-4 flex flex-col md:flex-row pb-10 items-center space-y-8 md:space-y-0"><input type="text" className="rounded-full outline-none w-full flex-grow text-gray-500 placeholder:text-gray-400 placeholder:text-sm pl-8 h-10"  placeholder="Type Something!!!" />
          <Button link={"/"} className="rounded-full md:px-12 py-[10px] -ml-5 px-[102px] sm:px-[150px] md:-ml-0 flex-1 w-[10%]">Subscribe</Button>
          </div>
    </div>
  )
}

export default Newsletter