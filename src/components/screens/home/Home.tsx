import { FC } from 'react';

import styles from './Home.module.scss';
import meImg from '../../../../public/me.jpg';
import Image from 'next/image';
import { siteName } from '@/config/seo.config';

interface IHome {}

const Home: FC<IHome> = () => {
	return (
		<>
			<div className={styles.home}>
				<div className={styles.container}>
					<div className={styles.text}>
						<div className={styles.title}>
							Приветсвую, меня зовут{' '}
							<span className={styles.name}>
								<code>{`<Максим />`}</code>
							</span>{' '}
							и я Frontend-разработчик
						</div>
						<div className={styles.description}>
							<p>В данный момент сайт находится в разработке.</p>
							<p>
								Скоро тут появится страница портфолио, с которой вы сможете
								ознакомиться, и не только.
							</p>
						</div>
					</div>
					<div className={styles.img}>
						<Image src={meImg} alt={siteName} fill priority />
					</div>
				</div>
			</div>
			{/* <Stack /> */}
		</>
	);
};

export default Home;
