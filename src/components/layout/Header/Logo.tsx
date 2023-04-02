import Link from 'next/link';
import { FC } from 'react';

import logoImage from '../../../../public/next.svg';
import Image from 'next/image';

interface ILogo {}

const Logo: FC<ILogo> = () => {
	return (
		<Link href="/" className="px-5 mr-5 block">
			<Image src={logoImage} width={250} height={50} alt="maxtulupov.ru" />
		</Link>
	);
};

export default Logo;
