import { FC } from 'react';
import { BsTelegram, BsGithub } from 'react-icons/bs';

import styles from './Socials.module.scss';
import Link from 'next/link';

import cn from 'classnames';

interface ISocials {
	addStyle?: string;
}

const Socials: FC<ISocials> = ({ addStyle }) => {
	return (
		<ul className={cn(styles.list, addStyle)}>
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
