import React from 'react';

import styles from './Welcome.module.scss';

import welcomeImage from 'assets/images/welcome/welcome.png';
import arrowDown from 'assets/images/welcome/arrow-down.svg';

export const Welcome = () => {
	return (
		<div className={styles.welcome}>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1>Sergiy Khachko</h1>
					<p>&gt; Front-end developer</p>
				</div>

				<button>About Me</button>
			</div>

			<div className={styles.image}>
				<img src={welcomeImage} alt='welcome' />

				<div className={styles.backEffect}></div>
			</div>

			<button className={styles.arrowDown}>
				<img src={arrowDown} alt='arrow' />
			</button>
		</div>
	);
};
