import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

export default function App() {
	return (
		<main className="App">
			<Navbar />
			<div className="all">
				<Main />
				<Skills />
				<WorkExperience />
				<ContactMe />
			</div>
			<Footer />
		</main>
	);
}
