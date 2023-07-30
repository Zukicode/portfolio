import { FC } from 'react';

import styles from './Footer.module.scss';

import githubIcon from 'assets/images/footer/github.svg';
import instagramIcon from 'assets/images/footer/instagram.svg';
import { useAppSelector } from 'hooks/useAppSelector';

export const Footer: FC = () => {
	const { active } = useAppSelector(state => state.language);
	const redirectToSocial = (social: string) => window.open(social);

	return (
		<div className={styles.footer}>
			<div className={styles.socials}>
				<div
					onClick={() =>
						redirectToSocial('https://www.instagram.com/khachkko/')
					}
					className={styles.social}
				>
					<img src={instagramIcon} alt='instagram' />
				</div>
				<div
					onClick={() => redirectToSocial('https://github.com/Zukicode')}
					className={styles.social}
				>
					<img src={githubIcon} alt='github' />
				</div>
			</div>

			<div className={styles.createdby}>
				{active.language === 'EN' ? (
					<p>
						Created by <span>zukicode (Sergiy Khachko)</span>
					</p>
				) : (
					<p>
						Створено <span>zukicode (Сергій Хачко)</span>
					</p>
				)}
			</div>
		</div>
	);
};
