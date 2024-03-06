import Navbar from "@/components/navbar";
import QueryProvider from "@/components/providers/query-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "KoinX",
	description: "KoinX frontend assignment",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("bg-neutral-50", inter.className)}>
				<QueryProvider>
					<Navbar />
					{children}
				</QueryProvider>
			</body>
		</html>
	);
}
