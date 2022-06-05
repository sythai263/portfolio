import React from 'react'
import './Navbar.scss'
import { BiHomeHeart} from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import {BiBookHeart} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
	const [activeNav, setActiveNav] = useState('#')
	return (
		<nav>
			<a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header'? 'active': ''}>
				<BiHomeHeart size={20}/>
			</a>
			<a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active': ''}>
				<BiUser size={20}/>
			</a>
			<a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active': ''}>
				<BiBookHeart size={20}/>
			</a>
			<a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services'? 'active': ''}>
				<MdOutlineMiscellaneousServices size={20}/>
			</a>
			<a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}>
				<AiOutlineMessage size={20}/>
			</a>
		</nav>
	)
}

export default Navbar