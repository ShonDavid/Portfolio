import React, { useState } from 'react';
import './NavBar.css';

const NavBar = (props) => {
	return (
		<div className={'sideMenu ' + (props.menuClicked && 'clicked')}>
			<ul className='list-menu'>
				<li onClick={() => (window.location.href = '#home')}>Home</li>
				<li onClick={() => (window.location.href = '#about-me')}>About Me</li>
				<li onClick={() => (window.location.href = '#my-projects')}>
					My Projects
				</li>
				<li onClick={() => (window.location.href = '#contact-me')}>
					Contact Me
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
