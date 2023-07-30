import { FC } from 'react';
import styles from './MobileMenuButton.module.scss';

type MobileMenuButtonProps = {
	actionMobileMenu: (isClose: boolean) => void;
};

export const MobileMenuButton: FC<MobileMenuButtonProps> = ({
	actionMobileMenu,
}) => {
	return (
		<div onClick={() => actionMobileMenu(false)} className={styles.menu}>
			<button>
				<svg
					viewBox='0 0 52 52'
					xmlns='http://www.w3.org/2000/svg'
					fill='#ffffff'
				>
					<path d='M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z' />
					<path d='M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z' />
					<path d='M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z' />
				</svg>
			</button>
		</div>
	);
};
