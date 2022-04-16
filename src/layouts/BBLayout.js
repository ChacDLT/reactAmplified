import React, { useState } from 'react';
import kiwi from '../assets/images/kiwi.svg';
import Button from '../components/Button';
import Drawer from '../components/Drawer';

const Navbar = () => (
  <div className="relative h-20 flex flex-col-reverse md:bg-white md:w-11/12 xl:w-full mx-auto ">
    <div className="absolute bottom-0 flex flex-row pl-2">
      <img src={kiwi} alt="" className="w-20" />
      <div className="my-auto">KIWI Corp</div>
    </div>
    <div className=" bg-sky-600 w-full h-3/4 flex flex-row-reverse md:rounded-lg ">
      <div className="my-auto	mr-3">
        <Button>Sign In</Button>
      </div>
    </div>
  </div>
);

export default function BBLayout({ children }) {
  console.log('BBLayout');
  const [isOpenMessageDrawer, setIsOpenMessageDrawer] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <div className="content-center">
        <Button className="md:invisible" onClick={() => setIsOpenMessageDrawer(true)}>
          Open Messages
        </Button>
      </div>
      <Drawer isOpen={isOpenMessageDrawer} setIsOpen={setIsOpenMessageDrawer} />
      {children}
    </div>
  );
}
