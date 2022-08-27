import Link from "next/link"
import Image from "next/image"
import Logo from "../icons/Logo"

function Header() {
  return (
      <div className="relative z-20 h-12 shadow-md flex justify-between items-center bg-white para md:px-8 lg:px-10 xl:px-12">
          <div className="text-2xl font-bold font-mono">Fylo</div>
          <div>
              <nav>
                <ul className="flex space-x-2 capitalize font-[500] sm:font-[600] sm:space-x-8 text-sm sm:text-lg">
                    <li>
                        <Link href=""><a> features </a></Link>
                      </li>
                      <li>
                        <Link href=""><a> team </a></Link>
                      </li>
                      <li>
                        <Link href=""><a> sign in </a></Link>
                    </li>
                </ul>
              </nav>
          </div>
    </div>
  )
}

export default Header