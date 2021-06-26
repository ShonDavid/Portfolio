import React, { Component, useState } from 'react';
import './App.css';
import Home from './Home/Home';
// import AboutMe from './aboutme';
// import MyProjects from './MyProjects/myprojects';
// import ContactMe from './contactme';
// import Modal from './Modal';
// import NavBar from './NavBar';

const App = () => {
	const [state, setState] = useState({
		count: 0,
		menuClicked: false,
		thePosition: window.pageYOffset,
		loading: false,
		show: false,
		title: '',
		explanation: '',
		website: '',
		github: '',
	});

	// const handleClose = () => {
	// 	setState({ ...state, show: false });
	// };

	// const handleShow = () => {
	// 	setState({ ...state, show: true });
	// };

	// const handleModal = (title, explanation, website, github) => {
	// 	setState({
	// 		...state,
	// 		show: true,
	// 		title: title,
	// 		explanation: explanation,
	// 		website: website,
	// 		github: github,
	// 	});
	// 	console.log('title=', title);
	// };

	const { loading } = state;
	if (loading) {
		return (
			<div className='loader'>
				<h1 className='loader-text'>SD</h1>
			</div>
		);
	}

	return (
		<div className='App'>
			<Home />
			{/* <AboutMe /> */}
			{/* <MyProjects /> */}
			{/* <ContactMe /> */}
		</div>
	);
};

export default App;
