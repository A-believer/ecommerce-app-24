import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
	return (
		<header className='w-full flex items-center justify-between py-5 text-xl fixed top-0 left-0 container'>
			<Link className='font-bold italic' href='/'>
				Logo
			</Link>
			<Link
				className={`${buttonVariants()} text-primary-foretext`}
				href='/sign-in'>
				Sign in
			</Link>
		</header>
	);
}
