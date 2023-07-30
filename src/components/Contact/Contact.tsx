import { FC, useRef, useState } from 'react';

import styles from './Contact.module.scss';

import contactImage from 'assets/images/contact/contact.png';

import { useAppSelector } from 'hooks/useAppSelector';

import emailjs from 'emailjs-com';

export const Contact: FC = () => {
	const [name, setName] = useState<string>('');
	const [from, setFrom] = useState<string>('');
	const [feedback, setFeedback] = useState<string>('');
	const form: any = useRef();

	const { active } = useAppSelector(state => state.language);

	const [error, setError] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		emailjs.send(
			'service_dp8hp2d',
			'template_p8uh70a',
			{
				to_name: 'zukich',
				message: `Name: ${name} From: ${from} Message -------> ${feedback}`,
				reply_to: '',
			},
			'6qOQGJ4W_1tVIlq63'
		);

		setFrom('');
		setName('');
		setFeedback('');
	};

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
					<form ref={form} onSubmit={e => handleSubmit(e)}>
						<div className={styles.box}>
							<div className={styles.inputSection}>
								<label htmlFor='name'>{active.content.contact.form.name}</label>
								<input
									type='text'
									placeholder={active.content.contact.form.name}
									id='name'
									value={name}
									onChange={e => setName(e.target.value)}
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
									value={from}
									onChange={e => setFrom(e.target.value)}
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
								value={feedback}
								onChange={e => setFeedback(e.target.value)}
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
