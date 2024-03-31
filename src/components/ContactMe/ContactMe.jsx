import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import icon from '../../images/envelope-solid.svg';
import github from '../../images/github.svg';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
	return (
		<div className="contact-container" id="contact">
			<h5>Contact Me</h5>

			<div className="contact-content">
				<div style={{ flex: 1 }}>
					<ContactInfoCard iconUrl={icon} text="eng.mohamedtarek0@gmail.com" />
					<ContactInfoCard
						iconUrl={github}
						text="https://github.com/engmohamedtarek1"
					/>
				</div>

				<div style={{ flex: 1 }}>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
