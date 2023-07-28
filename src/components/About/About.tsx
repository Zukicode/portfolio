import { FC } from 'react';

import styles from './About.module.scss';

import codingImage from 'assets/images/about/coding.jpg';
import coding2Image from 'assets/images/about/coding2.jpg';
import coding3Image from 'assets/images/about/coding3.jpg';

export const About: FC = () => {
	return (
		<div className={styles.about}>
			<div className={styles.text}>
				<h4>A bit about me</h4>

				<p>
					<span>
						Hi, I'm a front-end developer from Ukraine who is passionate about
						web programming.
					</span>{' '}
					I like to learn new things, I'm currently studying software
					engineering in college, and I enjoy solving complex problems.
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
