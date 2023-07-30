import { FC } from 'react';

import styles from './Header.module.scss';

import logo from 'assets/images/logo.svg';

import { Container } from 'components/Container/Container';
import { ChooseLang } from 'components/ChooseLang/ChooseLang';
import { MobileMenuButton } from './MobileMenuButton/MobileMenu';

import { Link } from 'react-scroll';

import { clickToProjects } from 'utils/scrollToComponent';

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
						<Link
							activeClass='active'
							to='welcome'
							spy={true}
							smooth={true}
							offset={-150}
							duration={700}
						>
							<li>Welcome</li>
						</Link>
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={-10}
							duration={700}
						>
							<li>About me</li>
						</Link>
						<Link
							activeClass='active'
							to='skills'
							spy={true}
							smooth={true}
							offset={-50}
							duration={700}
						>
							<li>Skills</li>
						</Link>

						<Link
							activeClass='active'
							to='projects'
							spy={true}
							smooth={true}
							offset={-50}
							duration={700}
						>
							<li>Projects</li>
						</Link>
						<Link
							activeClass='active'
							to='contact'
							spy={true}
							smooth={true}
							offset={25}
							duration={700}
						>
							<li>Contact</li>
						</Link>
					</ul>

					<ChooseLang />
					<MobileMenuButton />
				</div>
			</Container>
		</div>
	);
};
