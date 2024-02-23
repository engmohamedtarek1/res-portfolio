import React, { useState } from 'react';
import './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import { SKILLS } from '../../utils/data';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

function Skills() {
	const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

	const handleSelectSkill = (data) => {
		setSelectedSkill(data);
	};

	return (
		<div className="skills-container">
			<p className="skills-text">Technical Proficiency</p>

			<div className="skills-content">
				<div className="skills">
					{SKILLS.map((item) => {
						return (
							<SkillCard
								key={item.title}
								iconUrl={item.icon}
								title={item.title}
								isActive={selectedSkill.title === item.title}
								onClick={() => {
									handleSelectSkill(item);
								}}
							/>
						);
					})}
					z{' '}
				</div>

				<div className="skills-info">
					<SkillsInfoCard
						key={selectedSkill.title}
						heading={selectedSkill.title}
						skills={selectedSkill.skills}
					/>
				</div>
			</div>
		</div>
	);
}

export default Skills;
