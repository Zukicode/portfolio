import { FC } from 'react';

import styles from './App.module.scss';

import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container';
import { Welcome } from 'components/Welcome/Welcome';
import { About } from 'components/About/About';

export const App: FC = () => {
	return (
		<div className={styles.application}>
			<Header />

			<Container>
				<Welcome />
				<About />
			</Container>
		</div>
	);
};
