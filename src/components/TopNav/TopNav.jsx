import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { RiEnglishInput } from "react-icons/ri";
import './topnav.css'
import { TbVectorBezierCircle } from "react-icons/tb";
import { FiAlignJustify } from "react-icons/fi";




const TopNav = () => {
  return (
    <div className='main'>
      <div className='toggle'>
        <FiAlignJustify />
      </div>
      <div>
        <TbVectorBezierCircle className='logo-img' />
      </div>
      <div className='center'>
        <h2 className='logo'>
          LOGO
        </h2>
      </div>
      <div className='main2'>
        <CiSearch />
        <CiHeart />
        <MdOutlineShoppingBag />
        <CiHome className='to-hide-mobile' />
        <RiEnglishInput className='to-hide-mobile' />
      </div>
    </div>
  )
}

export default TopNav