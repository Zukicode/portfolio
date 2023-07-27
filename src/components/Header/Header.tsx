import React, { FC } from 'react';

import styles from './Header.module.scss';

import logo from 'assets/images/logo.svg';
import { Container } from 'components/Container/Container';
import { ChooseLang } from 'components/ChooseLang/ChooseLang';
import { MobileMenuButton } from './MobileMenuButton/MobileMenu';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
	return (
		<div className={styles.header}>
			<Container>
				<div className={styles.logo}>
					<img src={logo} alt='logo' />
				</div>

				<div className={styles.menu}>
					<ul>
						<li>Welcome</li>
						<li>About me</li>
						<li>Skills</li>
						<li>Projects</li>
						<li>Contact</li>
					</ul>

					<ChooseLang />
					<MobileMenuButton />
				</div>
			</Container>
		</div>
	);
};
