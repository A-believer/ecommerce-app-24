import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NextAuthProvider from "@/providers/next-auth-provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ecommerce Web App",
	description: "An e-commerce web app with a blog",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head />
			<body className={`${inter.className} container relative mt-20`}>
				<NextAuthProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<Navbar />
						{children}
					</ThemeProvider>
				</NextAuthProvider>
			</body>
		</html>
	);
}
