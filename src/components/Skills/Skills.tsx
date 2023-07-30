import { useAppSelector } from 'hooks/useAppSelector';
import styles from './Skills.module.scss';

import { skillArray } from 'utils/data/skills';

export const Skills = () => {
	const { active } = useAppSelector(state => state.language);

	return (
		<div className={styles.skills} id='skills'>
			<div className={styles.text}>
				<h1>{active.content.skills.title}</h1>
				<p>
					{active.content.skills.description.text}{' '}
					<span>{active.content.skills.description.span}</span>{' '}
					{active.content.skills.description.text2}
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
