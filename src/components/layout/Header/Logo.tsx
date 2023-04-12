import Link from 'next/link';
import { FC } from 'react';

import logoImage from '../../../../public/logo.svg';
import logoWhiteImage from '../../../../public/logo-white.svg';
import Image from 'next/image';

interface ILogo {}

const Logo: FC<ILogo> = () => {
	return (
		<Link
			href="/"
			className="pr-5 mr-5 block hover:opacity-80 transition-opacity"
		>
			<Image src={logoWhiteImage} width={250} height={50} alt="maxtulupov.ru" />
		</Link>
	);
};

export default Logo;
