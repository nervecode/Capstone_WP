import Logo from '../assets/github.png'
import {useState} from 'react';
import { IoIosArrowForward } from "react-icons/io"
import { RiStarSmileFill } from "react-icons/ri";
import { TbDiamondFilled } from "react-icons/tb";
import { BsSuitHeartFill } from "react-icons/bs";
import { ImFolderUpload } from "react-icons/im";

const SideNav = () => {
  const [open, setOpen] = useState(true)

  return ( 

<div className='flex'>

  <div 
      className={` duration-500 h-screen p-5 pt-8 bg-[#172554] ${open ? "w-72" : "w-24"} 
      duration-500 relative`}>
  <IoIosArrowForward 
      className={` absolute cursor-pointer rounded-full -right-3 top-9 bg-white text-3xl border-2 border-y-indigo-600 
      ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
  />

<div className='inline-flex'>
  <img className='cursor-pointer absolute top-0 left-4 mt-4 duration-500 w-14' src={Logo} alt="Github Logo"
      />

  <h1 
    className={`text-white font-medium origin-left ml-20 text-xl duration-500 ${!open && "scale-0"}`}>FLAR-J
      </h1>
<div>
<ul className={`absolute left-10 mt-20 text-gray-300 font-bold ${!open && "hidden"}`}>
  <li className='p-10'>PLAY ME!</li>
  <li className='p-10'>READ ME!</li>
  <li className='p-10'>KNOW ME!</li>
  <li className='p-10'>KNOW ME!</li>
  <li className='p-10'>UPLOAD</li>
</ul>  
</div>
  
</div>


</div>
<div className='p-7'>
  <h1 className='text-2xl font-semibold'>PLAY ME!</h1>
</div>

</div>     



  )
}

export default SideNav
