import Link from 'next/link';
import { FC } from 'react';
import styles from './Menu.module.scss';

interface IMenuList {}

const MenuList: FC<IMenuList> = () => {
	return (
		<ul className={styles.list}>
			{/* <li>
				<Link href="" className={styles.link}>
					Статьи
				</Link>
			</li>
			<li>
				<Link href="" className={styles.link}>
					Портфолио
				</Link>
			</li> */}
		</ul>
	);
};

export default MenuList;
