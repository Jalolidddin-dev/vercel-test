import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa'


const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>
				<FaInstagramSquare className='ins_icon' />

			</div>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	)
}

export default Navbar
