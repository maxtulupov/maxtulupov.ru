import { FC } from 'react';

import Layout from '@/components/layout/Layout';

import HeadProvider from './HeadProvider/HeadProvider';

interface MainProvider {
	children: JSX.Element;
}

const MainProvider: FC<MainProvider> = ({ children }) => {
	return (
		<HeadProvider>
			<Layout>{children}</Layout>
		</HeadProvider>
	);
};

export default MainProvider;
