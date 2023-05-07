import { FC, useEffect } from 'react';
import cn from 'classnames';

interface IMobileMenu {
	menu: boolean;
	setMenu: (arg0: boolean) => void;
}

import styles from '../mobile-menu/MobileMenu.module.scss';
import MenuList from '../Header/Menu/MenuList';
import Socials from '../Header/Socials/Socials';

const MobileMenu: FC<IMobileMenu> = ({ menu, setMenu }) => {
	const bodyLock = () => {
		if (document) {
			document.body.classList.add('_lock');
		}
	};
	const bodyUnLock = () => {
		if (document) {
			document.body.classList.remove('_lock');
		}
	};

	useEffect(() => {
		menu ? bodyLock() : bodyUnLock();
	}, [menu]);

	return (
		<div className={cn(styles.body, { [styles.body_active]: menu })}>
			<MenuList />
			<Socials />
		</div>
	);
};

export default MobileMenu;
