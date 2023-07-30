import { FC } from 'react';

import styles from './Project.module.scss';

import { IProject } from 'models/IProject';

import { randomColorFromArray } from 'utils/string/randomColorFromArray';

interface ProjectProps extends IProject {
	index?: number;
}

export const Project: FC<ProjectProps> = ({
	index,
	image,
	title,
	description,
	tags,
	linkProject,
}) => {
	const redirectToProjectPage = () => window.open(linkProject);

	return (
		<div
			className={
				index === 1 ? `${styles.project} ${styles.reverse}` : styles.project
			}
		>
			<div className={styles.image}>
				<img src={image} alt='projectImage' />
			</div>
			<div className={styles.details}>
				<div className={styles.textDetails}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.tags}>
					{tags.map(tag => (
						<span
							key={tag}
							className={styles.tag}
							style={{ background: randomColorFromArray() }}
						>
							#{tag}
						</span>
					))}
				</div>

				<button onClick={redirectToProjectPage}>
					View Project{' '}
					<span className={styles.icon}>
						<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
							<title />
							<g>
								<path d='M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z' />
							</g>
						</svg>
					</span>
				</button>
			</div>
		</div>
	);
};
