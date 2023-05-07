import { FC, useState } from 'react';

import styles from './Layout.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MobileMenu from './mobile-menu/MobileMenu';

interface ILayout {
	children: JSX.Element;
}

const Layout: FC<ILayout> = ({ children }) => {
	const [menu, setMenu] = useState<boolean>(false);
	return (
		<div className={styles.wrapper}>
			<Header menu={menu} setMenu={setMenu} />
			<main className={styles.main}>{children}</main>
			{/* <Footer /> */}
			<MobileMenu menu={menu} setMenu={setMenu} />
		</div>
	);
};

export default Layout;
