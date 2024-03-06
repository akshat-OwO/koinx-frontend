"use client";

import {
	QueryClient,
	QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode } from "react";

interface QueryProviderProps {
	children: ReactNode;
}

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default QueryProvider;
