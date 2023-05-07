import { FC } from 'react';

interface IStack {}

import styles from '../Stack/Stack.module.scss';

const Stack: FC<IStack> = () => {
	return (
		<section className={styles.stack}>
			<div className={styles.container}>
				<h2 className={styles.title}>Стек</h2>
				<div className={styles.content}>
					<h3>Сегодня мой стек выглядит так:</h3>
					<ul>
						<li>React</li>
						<li>TypeScript</li>
						<li>Next.js</li>
						<li>Redux</li>
						<li>JavaScript</li>
						<li>SCSS</li>
						<li>Tailwind</li>
						<li>Git</li>
						<li>REST API</li>
						<li>Axios</li>
					</ul>
					<p>
						Выше указы лишь ключевые технологии, с которыми связана моя работа в
						последнее время. Конечно же, за всю свою деятельность в вебе, мне
						приходилось сталкиваться с большим количеством разных инструментов,
						перечислять которые, нет никакого смысла.
					</p>
					<p className={styles.ps}>
						p.s. Всегда открыт для изучения и применения на практике новых для
						себя инструментов.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Stack;
