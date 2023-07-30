import { FC, useState } from 'react';

import styles from './Contact.module.scss';

import contactImage from 'assets/images/contact/contact.png';
import { useAppSelector } from 'hooks/useAppSelector';

export const Contact: FC = () => {
	const { active } = useAppSelector(state => state.language);

	const [error, setError] = useState<boolean>(false);

	return (
		<div className={styles.contact} id='contact'>
			<div className={styles.header}>
				<h1>{active.content.contact.title}</h1>
			</div>

			<div className={styles.content}>
				<div className={styles.image}>
					<div className={styles.backEffect}></div>

					<img src={contactImage} alt='contact' />
				</div>

				<div className={styles.formSection}>
					<form>
						<div className={styles.box}>
							<div className={styles.inputSection}>
								<label htmlFor='name'>{active.content.contact.form.name}</label>
								<input
									type='text'
									placeholder={active.content.contact.form.name}
									id='name'
								/>
							</div>
							<div className={styles.inputSection}>
								<label htmlFor='email'>
									{active.content.contact.form.email}
								</label>
								<input
									type='email'
									placeholder={active.content.contact.form.email}
									id='email'
								/>
							</div>
						</div>
						<div className={styles.messageSection}>
							<label htmlFor='message'>
								{active.content.contact.form.message}
							</label>
							<textarea
								placeholder={active.content.contact.form.message}
								id='message'
							/>
						</div>
						{error && (
							<p className={styles.error}>
								{active.content.contact.form.error}
							</p>
						)}
						<button>{active.content.contact.button}</button>
					</form>
				</div>
			</div>
		</div>
	);
};
