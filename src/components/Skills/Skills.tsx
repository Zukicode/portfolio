import styles from './Skills.module.scss';

import { skillArray } from 'utils/data/skills';

export const Skills = () => {
	return (
		<div className={styles.skills}>
			<div className={styles.text}>
				<h1>🗼 Skills</h1>
				<p>
					I am currently looking for an opportunity to join a team{' '}
					<span>that is developing and eager to learn,</span> using all the
					opportunities in its field.
				</p>
			</div>

			<div className={styles.mySkills}>
				{skillArray.map(skill => (
					<div key={skill.skillName} className={styles.skill}>
						<img src={skill.icon} alt='skillIcon' height={'45px'} />
					</div>
				))}
			</div>
		</div>
	);
};
