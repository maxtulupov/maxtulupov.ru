import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import logoImage from '@/assets/images/logo.svg';

import { siteName, titleMerge } from '@/config/seo.config';

import { onlyText } from '../string/clearText';

import { Seo } from './meta.interface';

const Meta: FC<Seo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter();
	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta name="description" content={onlyText(description, 152)} />
						<link rel="canonical" href={currentUrl} />
						<meta name="og:locale" content="en" />
						<meta name="og:title" content={titleMerge(title)} />
						<meta name="og:url" content={currentUrl} />
						<meta name="og:image" content={image || logoImage} />
						<meta name="og:site_name" content={siteName} />
						<meta name="og:description" content={onlyText(description, 197)} />
						<meta name="robots" content="noindex, nofollow" />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
