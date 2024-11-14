import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { HiMiniBars2 } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import CartImg from "../assets/cartImg.jpeg";

const Navbar = () => {
  let cateRef = useRef();
  let accRef = useRef();
  let cartRef = useRef();
  let [isCateNav, setisCateNav] = useState(false);
  let [isAcc, setisAcc] = useState(false);
  let [isCart, setIsCart] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target)) {
        setisCateNav(!isCateNav);
      } else {
        setisCateNav(false);
      }
      if (accRef.current.contains(e.target)) {
        setisAcc(!isAcc);
      } else {
        setisAcc(false);
      }
      if (cartRef.current.contains(e.target)) {
        setIsCart(!isCart);
      } else {
        setIsCart(false);
      }
    });
  }, [isCateNav, isAcc, isCart]);

  return (
    <section className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className="items-center">
          <div className="w-1/4 relative">
            <div ref={cateRef} className="flex items-center gap-x-2">
              <HiMiniBars2 />
              <h3>Shop by Category</h3>
            </div>
            {isCateNav && (
              <div className="bg-[#262626] w-[300px] absolute left-0 top-[60px] z-[1]">
                <ul className="py-3">
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Accesories
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Furniture
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Electronics
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Clothes
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Bags
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-1/2">
            <div className="relative">
              <input
                type="search"
                className="py-3 pl-2 w-full rounded-sm  outline-none"
                placeholder="Search.."
              />
              <ImSearch className="absolute top-[50%] translate-y-[-50%] right-4" />
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-end gap-x-6 relative">
              <div ref={accRef} className="flex items-center cursor-pointer">
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <div className="cursor-pointer" ref={cartRef}>
                <IoCart />
              </div>
              {isAcc && (
                <div className="bg-[#262626] w-[200px] absolute left-[138px] top-[60px] z-[1]">
                  <ul className="py-3">
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                      Account
                    </li>
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">
                      LogOut
                    </li>
                  </ul>
                </div>
              )}
              {isCart && (
                <div className="absolute right-0 top-full mt-2 w-full md:w-[360px] bg-[rgba(233,230,230,0.9)] z-[1]">
                  <div className="flex bg-white py-4 px-5">
                    <div>
                      <img
                        className="w-[80px] md:w-[150px]"
                        src={CartImg}
                        alt="Cart item"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="font-DM font-bold text-[14px] ml-3">
                        <h3>Black Smart Watch</h3>
                      </div>
                      <div className="font-DM font-bold text-[14px] ml-3">
                        <h3>$44.00</h3>
                      </div>
                    </div>
                    <div className="ms-auto text-[20px]">
                      <RxCross2 />
                    </div>
                  </div>
                  <div className="bg-white py-4 px-5">
                    <h5 className="text-[rgba(166,162,162,0.9)]">
                      Subtotal:{" "}
                      <span className="text-black font-bold">$44.00</span>
                    </h5>
                    <div className="flex flex-wrap md:flex-nowrap my-5">
                      <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                        View Cart
                      </button>
                      <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Navbar;