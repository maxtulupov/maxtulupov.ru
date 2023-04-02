import { FC } from 'react';

import styles from './Header.module.scss';
import Logo from './Logo';
import Menu from './Menu/Menu';
import Socials from './Socials/Socials';

interface IHeader {}

const Header: FC<IHeader> = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Logo />
				<div className={styles.right}>
					{/* <Menu /> */}
					<Socials />
				</div>
			</div>
		</header>
	);
};

export default Header;
