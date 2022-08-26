import Image from "next/image"

import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className="flex px-2 h-12 py-4 justify-between items-center">
     <Image src="/images/logo.svg" width={100} height={30} />
      <div>
        <IconButton />
        <MenuIcon className="!font-bold !text-4xl" />
        <IconButton />
      </div>
    </div>
  );
}

export default Header;
