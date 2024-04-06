import React from "react";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='container flex flex-col items-center justify-center w-full h-screen'>
			{children}
		</section>
	);
}
