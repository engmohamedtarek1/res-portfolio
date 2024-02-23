import React from 'react';
import mt from '../../images/main-img.png';
// import mt from '../../images/mt.jpeg';
import reactLogo from '../../images/react-2.svg';
import htmlLogo from '../../images/html-icon.svg';
import cssLogo from '../../images/CSS3_logo.svg.png';
import jsLogo from '../../images/js.svg';
import './Main.css';

function Main() {
	return (
		<>
			<div className="main">
				<div className="main-left">
					<p className="main-text">Building Digital Experiences That Inspire</p>
					<p className="second-text">
						Passionate Frontend Developer | Transforming Ideas into Seamless and
						Visually Stunning Web Solutions.
					</p>
				</div>

				<div className="main-right">
					<div className="up">
						<img alt="logo" className="logo-item" src={reactLogo}></img>
						<img alt="logo" className="main-img" src={mt}></img>
					</div>

					<div className="down">
						<img alt="logo" className="logo-item" src={htmlLogo}></img>
						<img alt="logo" className="logo-item" src={cssLogo}></img>
						<img alt="logo" className="logo-item" src={jsLogo}></img>
					</div>
				</div>
			</div>
		</>
	);
}

export default Main;
