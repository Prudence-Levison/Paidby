'use client';

import { ReactNode, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

const Protected = ({ children }: { children: ReactNode }) => {
	const user = JSON.parse(window.localStorage.getItem('user')!);

	const token = user?.access_token;

	const router = useRouter();

	useLayoutEffect(() => {
		if (!token) {
			router.push('/');
		}
	}, [token]);

	return <>{children}</>;
};

export default Protected;
