import React, { useState } from 'react';
import Container from './Container';
import Flex from './Flex';
import Logo from '../assets/logo.png';
import { FaBars, FaCross } from "react-icons/fa";


const Header = () => {

    let [show, setShow] = useState(false)

  return (
    <header className='py-6'>
      <Container>
        <Flex className='justify-between items-center'>
            <div className="w-1/4">
            <img src={Logo} alt="Logo" />
            </div>
            <div className="w-3/4">
                <ul className={`lg:flex lg:static z-10 absolute right-0 top-0 duration-300 ease-in-out justify-center gap-x-[20px] ${show ? 'right-0 top-[50px] w-full' : 'right-[-100px] top-[50px]'}`}>
                    <li className='font-sans text-[16px] font-bold duration-300 ease-in-out text-[#767676] hover:text-[#262626] hover:font-bold text-center py-2 cursor-pointer'>Home</li>
                    <li className='font-sans text-[16px] font-bold duration-300 ease-in-out text-[#767676] hover:text-[#262626] hover:font-bold text-center py-2 cursor-pointer'>Shop</li>
                    <li className='font-sans text-[16px] font-bold duration-300 ease-in-out text-[#767676] hover:text-[#262626] hover:font-bold text-center py-2 cursor-pointer'>About</li>
                    <li className='font-sans text-[16px] font-bold duration-300 ease-in-out text-[#767676] hover:text-[#262626] hover:font-bold text-center py-2 cursor-pointer'>Contacts</li>
                    <li className='font-sans text-[16px] font-bold duration-300 ease-in-out text-[#767676] hover:text-[#262626] hover:font-bold text-center py-2 cursor-pointer'>Journal</li>
                </ul>
            </div>
            <div className="lg:hidden" onClick={()=>setShow(!show)}>
                {show ? <FaCross/> : <FaBars/>}
            </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
