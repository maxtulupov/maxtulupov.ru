import { FC } from 'react';

interface IPortfolio {}

import styles from './Portfolio.module.scss';

const Portfolio: FC<IPortfolio> = () => {
	return (
		<section className={styles.portfolio}>
			<div className={styles.container}>
				<h2 className={styles.title}>Портфолио тест</h2>
				<div className={styles.content}>{/* map */}</div>
			</div>
		</section>
	);
};

export default Portfolio;
