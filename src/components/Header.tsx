import React, { useEffect, useState } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { FiPackage } from 'react-icons/fi'
import { GiShoppingBag } from 'react-icons/gi'
import { LuUser2 } from 'react-icons/lu'
import { MdClose, MdMenu } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [token, setToken] = useState('')
  const [header, setHeader] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () =>{
    setMenuOpened(!menuOpened)
  }
  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 35 ? setHeader(true) : setHeader(false)
    }

    const checkUrl = () => {
      const currentUrl = window.location.href
      console.log({currentUrl})
      if(currentUrl !== "http://localhost:5173/"){
        setHeader(true)
      } else {
        window.addEventListener('scroll', handleScroll)
      }
    }
    checkUrl()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location])

  return (
   <header className={`${header ? "bg-white shadow-sm py-4" : "bg-transparent py-5"} fixed left-0 right-0 w-full z-10 transition-all duration-100 py-2`}>
    <div className='max-padd-container flexBetween'>
      {/* LOGO */}
      <Link to='/' className='bold-24'>
        <h4 className='xl:text-secondary bold-36 xm:text-gray-50'>
          Novo<span className='text-gray-50 bold-36'>Sabor</span>  
        </h4>
      </Link>
      {/* Navbar */}
      <div className='flexBetween'>
        {/* Combined Navbar */}
        <Navbar header={header} menuOpened={menuOpened} containerStyles={
          `${menuOpened ? 
            "flex md:hidden items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-xl w-64 medium-16 ring-2 ring-slate-900/5 transition-all duration-300" 
            :
            "hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}`
          }/>
        <div className='flexBetween gap-x-2 xs:gap-x-8'>
          {/* Buttons */}
          {
            !menuOpened ? 
            (<MdMenu  onClick={toggleMenu} className='md:hidden cursor-pointer text-2xl'/>) : 
            (<MdClose onClick={toggleMenu} className='md:hidden cursor-pointer text-2xl'/>)
          }
          <Link to='/cart' className='flex relative'>
            <GiShoppingBag className='text-[25px]'/>
            <span className='bg-white text-tertiary text-sm absolute -right-2.5 -top-2.5 flexCenter w-5 h-5 rounded-full shadow-md'>0</span>
          </Link>
          {
            !token ? 
            (
              <button className='btn-light rounded-full flexCenter gap-x-2'><LuUser2 className='bold-18'/>Login</button>
            ) 
            : 
            (
              <div className='group relative'>
                <FaCircleUser className='text-2xl'/>
                <ul className='bg-primary shadow-sm p-3 w-24 ring-1 ring-slate-900/15 rounded absolute right-0 hidden group-hover:flex flex-col '>
                  <li onClick={() => Navigate({to: "/my-orders"})}>
                    <FiPackage className='text-[19px]'/>
                    <p>Orders</p>
                  </li>
                  <hr className='my-2'/>
                  <li onClick={() =>  Navigate({to: "/my-orders"})}>
                    <TbLogout className='text-[19px]'/>
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )
          }
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header
