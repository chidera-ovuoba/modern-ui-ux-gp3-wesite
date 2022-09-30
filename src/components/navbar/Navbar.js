import React,{ useEffect, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { navLinks } from '../../constants';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [iscrollNav, setIsScrollNav] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener('scroll',()=>setIsScrollNav(window.scrollY))
   },[iscrollNav])

  return (
    <div className={`gpt3__navbar ${iscrollNav ? 'blue':''} `}>
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navbar-link-logo">
        <img src={logo} alt="logo" />
        </div>
      
          <div className={`${toggleMenu ? 'scale-up-center':'gpt3__navbar-links-none'} gpt3__navbar-links-block`}>
           <div className='gpt3__navbar-links-container'>
          {
            navLinks.map(({name,href}) => (
              <p key={name}><a href={href}>{name}</a></p>
            ))
        }
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type='button'>Sign up</button>
          </div>
          </div>
        <div className='gpt3__navbar-menu'>
          {
            toggleMenu ? <RiCloseLine color='#fff' size={30} onClick={()=>setToggleMenu(false)} /> : <RiMenu3Line color='#fff' size={30} onClick={()=>setToggleMenu(true)} />
          }
            </div>
            
         
      </div>
       
    </div>
  )
}

export default Navbar