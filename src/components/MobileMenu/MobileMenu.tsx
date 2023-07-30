import { FC } from 'react';

import styles from './MobileMenu.module.scss';

import logo from 'assets/images/logo.svg';
import closeIcon from 'assets/images/close.svg';

import { Link } from 'react-scroll';

type MobileMenuProps = {
	isVisibleMobileMenu: boolean;
	actionMobileMenu: (isClose: boolean) => void;
};

export const MobileMenu: FC<MobileMenuProps> = ({
	isVisibleMobileMenu,
	actionMobileMenu,
}) => {
	return (
		<div
			className={
				isVisibleMobileMenu ? `${styles.menu} ${styles.show}` : styles.menu
			}
		>
			<div className={styles.header}>
				<div className={styles.logo}>
					<img src={logo} alt='logoImage' width={'50px'} height={'50px'} />
				</div>
				<button onClick={() => actionMobileMenu(true)} className={styles.close}>
					<img src={closeIcon} alt='close' width={'25px'} height={'25px'} />
				</button>
			</div>

			<div className={styles.menuMobile}>
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
			</div>
		</div>
	);
};
