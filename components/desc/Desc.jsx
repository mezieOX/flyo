import Button from "../ui/button/Button"

function Desc() {
  return (
      <div className="text-center max-w-xl mx-auto my-5 para">
          <h1 className="text-2xl font-[600]">All your files in one secure location, accessible anywhere.</h1>
          <p className="font-[600] my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eum adipisci ex nihil quas laboriosam! Rerum eveniet atque aperiam molestias quidem ad quo </p>
          <div className="my-8">
              <Button link={""}>get started</Button>
          </div>
    </div>
  )
}

export default Desc