import { FC } from 'react';

import styles from './Projects.module.scss';
import { Project } from './Project/Project';
import { useAppSelector } from 'hooks/useAppSelector';
import { IProject } from 'models/IProject';

export const Projects: FC = () => {
	const { active } = useAppSelector(state => state.language);

	return (
		<div className={styles.projects} id='projects'>
			<div className={styles.header}>
				<h1>
					<span>{active.content.projects.title.span}</span>{' '}
					{active.content.projects.title.text}
				</h1>
			</div>

			<div className={styles.listOfProject}>
				{active.content.projects.listOfProjects.map(
					(project: IProject, index: number) => (
						<Project key={project.title} index={index} {...project} />
					)
				)}
			</div>
		</div>
	);
};
