import React from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Carousel from 'nuka-carousel';

function WorkExperience() {
	var slidesCount = 2;
	function callWidth() {
		if (window.innerWidth >= 1024) slidesCount = 2;
		else slidesCount = 1;

		return slidesCount;
	}

	callWidth();

	return (
		<div className="experience-container" id="experience">
			<h5>Work Experience</h5>

			<div className="experience-content">
				<Carousel
					renderCenterLeftControls={({ previousSlide }) => (
						<div onClick={previousSlide} className="arrow-left">
							<i className="fa-solid fa-arrow-left"></i>
						</div>
					)}
					renderCenterRightControls={({ nextSlide }) => (
						<div onClick={nextSlide} className="arrow-right">
							<i className="fa-solid fa-arrow-right"></i>
						</div>
					)}
					autoplay={true}
					slidesToShow={slidesCount}
				>
					{WORK_EXPERIENCE.map((item) => {
						return <ExperienceCard key={item.title} details={item} />;
					})}
				</Carousel>
			</div>
		</div>
	);
}

export default WorkExperience;
