import { FC } from 'react';

import styles from './About.module.scss';

import codingImage from 'assets/images/about/coding.jpg';
import coding2Image from 'assets/images/about/coding2.jpg';
import coding3Image from 'assets/images/about/coding3.jpg';
import { useAppSelector } from 'hooks/useAppSelector';

export const About: FC = () => {
	const { active } = useAppSelector(state => state.language);

	return (
		<div className={styles.about} id='about'>
			<div className={styles.text}>
				<h4>{active.content.about.title}</h4>

				<p>
					<span>{active.content.about.description.span}</span>{' '}
					{active.content.about.description.text}
				</p>
			</div>
			<div className={styles.images}>
				<div
					className={styles.image}
					style={{ backgroundImage: `url(${codingImage})` }}
				/>
				<div className={styles.box}>
					<div
						className={styles.image}
						style={{ backgroundImage: `url(${coding2Image})` }}
					/>
					<div
						className={styles.image}
						style={{ backgroundImage: `url(${coding3Image})` }}
					/>
				</div>
			</div>

			<div className={styles.backEffect}></div>
		</div>
	);
};
