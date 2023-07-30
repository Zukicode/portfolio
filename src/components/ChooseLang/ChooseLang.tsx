import { FC, useState } from 'react';

import styles from './ChooseLang.module.scss';

import ukraineIcon from 'assets/images/ua.svg';
import usaIcon from 'assets/images/usa.svg';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';

import allLanguageContent from 'data/data.json';

export const ChooseLang: FC = () => {
	const [isVisible, setVisible] = useState<boolean>(false);

	const { active } = useAppSelector(state => state.language);
	const { setLang } = useActions();

	const toggleVisible = () => setVisible(prev => !prev);

	const changeLanguage = (lang: string) => {
		if (lang === 'EN') {
			setLang(allLanguageContent[0]);
		} else {
			setLang(allLanguageContent[1]);
		}
		setVisible(false);
	};

	return (
		<div className={styles.chooseLang}>
			<div onClick={toggleVisible} className={styles.activeLang}>
				<span className={styles.icon}>
					<svg viewBox='0 0 512 512'>
						<path d='M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z' />
					</svg>
				</span>

				<p>{active.language}</p>
			</div>

			<div
				className={
					isVisible
						? `${styles.chooseLangOpen} ${styles.show}`
						: styles.chooseLangOpen
				}
			>
				<div
					onClick={() => changeLanguage('UA')}
					className={
						active.language === 'UA'
							? `${styles.lang} ${styles.active}`
							: styles.lang
					}
				>
					<div className={styles.icon}>
						<img src={ukraineIcon} alt='countryIcon' />
					</div>
					<p>UA</p>
				</div>

				<div
					onClick={() => changeLanguage('EN')}
					className={
						active.language === 'EN'
							? `${styles.lang} ${styles.active}`
							: styles.lang
					}
				>
					<div className={styles.icon}>
						<img src={usaIcon} alt='countryIcon' />
					</div>

					<p>EN</p>
				</div>
			</div>
		</div>
	);
};
