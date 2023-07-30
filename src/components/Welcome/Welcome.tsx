import { FC } from 'react';

import styles from './Welcome.module.scss';

import welcomeImage from 'assets/images/welcome/welcome.png';
import arrowDown from 'assets/images/welcome/arrow-down.svg';

import { Link } from 'react-scroll';

import { useAppSelector } from 'hooks/useAppSelector';

export const Welcome: FC = () => {
	const { active } = useAppSelector(state => state.language);

	return (
		<div className={styles.welcome} id='welcome'>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1>{active.content.welcome.name}</h1>
					<p>&gt; {active.content.welcome.description}</p>
				</div>

				<Link to='about' spy={true} smooth={true} offset={-10} duration={700}>
					<button>{active.content.welcome.button}</button>
				</Link>
			</div>

			<div className={styles.image}>
				<img src={welcomeImage} alt='welcome' />

				<div className={styles.backEffect}></div>
			</div>

			<button className={styles.arrowDown}>
				<Link to='skills' spy={true} smooth={true} offset={-10} duration={700}>
					<img src={arrowDown} alt='arrow' />
				</Link>
			</button>
		</div>
	);
};
