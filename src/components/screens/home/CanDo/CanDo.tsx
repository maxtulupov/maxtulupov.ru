import { FC } from 'react';

interface ICanDo {}

import styles from '../CanDo/CanDo.module.scss';

const CanDo: FC<ICanDo> = () => {
	return (
		<section className={styles.cando}>
			<div className={styles.container}>
				<h2 className={styles.title}>Что могу сделать?</h2>
			</div>
		</section>
	);
};

export default CanDo;
