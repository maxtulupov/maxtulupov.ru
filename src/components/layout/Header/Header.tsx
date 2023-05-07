import { FC } from 'react';

import styles from './Header.module.scss';
import Logo from './Logo';
import Menu from './Menu/Menu';
import Socials from './Socials/Socials';

interface IHeader {
	menu: boolean;
	setMenu: (arg0: boolean) => void;
}

const Header: FC<IHeader> = ({ menu, setMenu }) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Logo />
				<div className={styles.right}>
					<Menu menu={menu} setMenu={setMenu} />
					{/* <SwitchTheme /> */}
					<Socials addStyle="hidden" />
				</div>
			</div>
		</header>
	);
};

export default Header;
