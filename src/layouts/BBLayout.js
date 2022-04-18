import React, { useState } from 'react';
import kiwi from '../assets/images/kiwi.svg';
import Button from '../components/Button';
import Drawer from '../components/Drawer';
import CardDetail from '../components/CardDetail';
import SmallCard from '../components/SmallCard';

const Navbar = () => (
  <div className="relative h-20 flex flex-col-reverse md:bg-white xl:w-full mx-auto ">
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

const OrderInfo = () => (
  <div className="grid grid-cols-2 md:grid-cols-none md:flex md:flex-row md:w-full text-center text-sm ">
    <div className="bg-black text-white md:rounded-l-md md:w-1/4">
      <div>Order:</div>
      <div>####</div>
    </div>
    <div className="bg-slate-400 border-b border-black md:w-1/4 md:border-0">
      <div>Name:</div>
      <div>Felipe Delatorre</div>
    </div>

    <div className="bg-slate-400 border-r border-black md:w-1/4 md:border-0">
      <div>Date:</div>
      <div>04/15/2022 </div>
    </div>

    <div className="bg-slate-400 md:rounded-r-md md:w-1/4">
      <div>Status:</div>
      <div>Received</div>
    </div>
  </div>
);

const MessageBoard = () => (
  <div className="">
    <div className="bg-black rounded-t-md text-white text-sm p-3">MessageBoard</div>
    <div>
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
  </div>
);

export default function BBLayout({ children }) {
  console.log('BBLayout');
  const [isOpenMessageDrawer, setIsOpenMessageDrawer] = useState(false);

  return (
    <div className="max-w-screen-lg md:w-11/12 mx-auto">
      <Navbar />
      <div className="md:hidden flex justify-center mt-2">
        <Button className="" onClick={() => setIsOpenMessageDrawer(true)}>
          Open Messages
        </Button>
      </div>

      <div className="flex flex-row mt-2">
        <div className="hidden md:block w-1/4">
          <div className="mr-2">
            <MessageBoard />
          </div>
        </div>

        <div className="grow">
          <div className="">
            <OrderInfo />
          </div>

          <div className="mt-2 hidden md:block">
            <div className="bg-purple-300 rounded-sm flex flex-row justify-between">
              <div className="">Orders</div>
              <div>
                <Button>Add Items +</Button>
              </div>
            </div>
            <div className="flex flex-row w-full px-2 bg-black text-white mt-2 justify-between text-center	">
              <div className="w-1/4">id</div>
              <div className="w-1/4">product</div>
              <div className="w-1/4">qty</div>
              <div className="w-1/4">price</div>
            </div>
            <div className="flex flex-row w-full px-2 bg-slate-300 justify-between text-center	">
              <div className="w-1/4">123</div>
              <div className="w-1/4">Coke</div>
              <div className="w-1/4">3</div>
              <div className="w-1/4">$300</div>
            </div>
            <div className="flex flex-row w-full px-2 bg-slate-100 justify-between text-center	">
              <div className="w-1/4">11</div>
              <div className="w-1/4">Pepsi</div>
              <div className="w-1/4">100</div>
              <div className="w-1/4">$300,000</div>
            </div>
            <div className="flex flex-row w-full px-2 bg-slate-300 justify-between text-center	">
              <div className="w-1/4">45</div>
              <div className="w-1/4">Diet coke</div>
              <div className="w-1/4">99</div>
              <div className="w-1/4">$100</div>
            </div>
          </div>

          <div className="mt-2 md:hidden pb-24">
            <div className="flex flex-row-reverse mr-2 mb-2">
              <Button>Add Items +</Button>
            </div>
            <div>
              <CardDetail />
              <CardDetail />
              <CardDetail />
              <CardDetail />
            </div>
          </div>

          <div className="absolute bottom-0 flex flex-row-reverse w-full  hidden md:flex">
            <button type="button" className="py-1 w-20 bg-red-300 rounded-md">
              Cancel
            </button>
            <button type="button" className="py-1 mr-2 w-20 bg-blue-200 rounded-md">
              Approve
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full md:hidden ">
        <button type="button" className="w-1/2 py-4 bg-red-300 ">
          Cancel
        </button>
        <button type="button" className="w-1/2 py-4 bg-blue-200">
          Approve
        </button>
      </div>
      <Drawer isOpen={isOpenMessageDrawer} setIsOpen={setIsOpenMessageDrawer} />
    </div>
  );
}
