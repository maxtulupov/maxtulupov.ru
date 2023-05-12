import { FC } from 'react';

interface IPortfolio {}

import styles from './Portfolio.module.scss';
import PortfolioItem from '@/components/ui/portfolio/PortfolioItem';

const Portfolio: FC<IPortfolio> = () => {
	return (
		<section className={styles.portfolio}>
			<div className={styles.container}>
				<h2 className={styles.title}>Превью портфолио</h2>
				<div className={styles.content}>
					<PortfolioItem />
					<PortfolioItem />
					<PortfolioItem />
				</div>
				<div className={styles.moreBtn}>Смотреть все</div>
			</div>
		</section>
	);
};

export default Portfolio;
