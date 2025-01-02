'use client'; // Explicitly mark this file as a Client Component

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function ReduxProvider({ children }: { children: ReactNode }) {
	return <Provider store={store}>{children}</Provider>;
}