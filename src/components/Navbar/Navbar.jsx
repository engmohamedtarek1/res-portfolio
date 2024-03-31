import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
	const [clicked, setClicked] = useState(false);

	function handleClick() {
		setClicked(!clicked);
	}

	return (
		<>
			<div className="navbar">
				<div className="left">
					<p>Tarek Co.</p>
				</div>
				<div className="right">
					<ul id="menu" className={clicked ? '#menu active' : '#menu'}>
						<li>
							<a className="menu-item" href="#main">
								Home
							</a>
						</li>
						<li>
							<a className="menu-item" href="#skills">
								Skills
							</a>
						</li>
						<li>
							<a className="menu-item" href='#experience'>Work Experience</a>
						</li>
						<li>
							<a className="menu-item" href='#contact'>Contact me</a>
						</li>
						<li>
							<button className="hire-button">Hire Me</button>
						</li>
					</ul>
				</div>
				<div id="mobile" onClick={handleClick}>
					<i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
			</div>
		</>
	);
}

export default Navbar;
