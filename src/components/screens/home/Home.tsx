import { FC } from 'react';

import styles from './Home.module.scss';
import meImg from '../../../../public/me.jpg';
import Image from 'next/image';
import { siteName } from '@/config/seo.config';
import Meta from '@/utils/meta/Meta';
import Portfolio from './portfolio/Portfolio';
import CanDo from './CanDo/CanDo';
import Stack from './Stack/Stack';

interface Home {}

const Home: FC<Home> = () => {
	return (
		<Meta
			title="Максим Тулупов"
			description="Привет, меня зовут Максим Тулупов и я Frontend-разработчик"
			image={String(meImg.src)}
		>
			<section className={styles.home}>
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
			</section>
			{/* <CanDo /> */}
			<Stack />
			{/* <Portfolio /> */}
		</Meta>
	);
};

export default Home;
