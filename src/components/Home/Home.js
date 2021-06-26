import React, { useState } from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className='Home'>
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
			/>
			<div className='div-home'>
				<h1 className='home-text'>
					<b>Shon David</b>
				</h1>
				<h2 className='home-text'>Full-stack Developer</h2>
				<div
					className='btn-one'
					onClick={() =>
						window.open(`${process.env.PUBLIC_URL}/Portfolio.pdf`, '_blank')
					}
				>
					<span>
						<i className='fa fa-download' />
						&nbsp;Resume
					</span>
				</div>
				<h3 className='home-text'>
					I built this website from scratch with React.
				</h3>
			</div>
		</div>
	);
};

export default Home;
