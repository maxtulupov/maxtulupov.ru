import { FC } from 'react';

import styles from './Layout.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface ILayout {
	children: JSX.Element;
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>{children}</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
