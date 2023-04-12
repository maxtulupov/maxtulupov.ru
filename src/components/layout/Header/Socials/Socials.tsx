import { FC } from 'react';
import { BsTelegram, BsGithub } from 'react-icons/bs';

import styles from './Socials.module.scss';
import Link from 'next/link';

const Socials: FC = () => {
	return (
		<ul className={styles.list}>
			<li>
				<Link href="https://github.com/maxtulupov" target="_blank">
					<BsGithub />
				</Link>
			</li>
			<li>
				<Link href="https://t.me/maxtulupov" target="_blank">
					<BsTelegram />
				</Link>
			</li>
		</ul>
	);
};

export default Socials;
