import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { FC } from 'react';

import { accentColor } from '@/config/constants';

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

				<meta name="theme-color" content={'#013179'} />
				<meta name="msapplication-navbutton-color" content="#013179" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#013179" />
			</Head>
			{children}
		</>
	);
};

export default HeadProvider;