import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { FC } from 'react';

import { accentColor, bgColor } from '@/config/constants';

import Favicons from './Favicons';

interface IHeadProvider {
	children: JSX.Element;
}

const HeadProvider: FC<IHeadProvider> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<Favicons />

				<meta name="theme-color" content={bgColor} />
				<meta name="msapplication-navbutton-color" content={bgColor} />
				<meta name="apple-mobile-web-app-status-bar-style" content={bgColor} />
				<meta name="yandex-verification" content="03a870b16f0d7fda" />
			</Head>
			{children}
		</>
	);
};

export default HeadProvider;
