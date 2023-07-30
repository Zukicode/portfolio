import { FC } from 'react';

import styles from './App.module.scss';

import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container';
import { Welcome } from 'components/Welcome/Welcome';
import { About } from 'components/About/About';
import { Skills } from 'components/Skills/Skills';
import { Projects } from 'components/Projects/Projects';
import { Contact } from 'components/Contact/Contact';
import { Footer } from 'components/Footer/Footer';

export const App: FC = () => {
	return (
		<div className={styles.application}>
			<Header />

			<Container>
				<Welcome />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</Container>
			<Footer />
		</div>
	);
};
