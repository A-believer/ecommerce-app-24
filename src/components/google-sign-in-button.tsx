import { ReactNode } from "react";
import { Button } from "./ui/button";

export default function GoogleSignInButton({
	children,
}: {
	children: ReactNode;
}) {
	function handleSignIn() {
		console.log("signed in with google!");
	}
	return (
		<Button onClick={handleSignIn} className='w-full text-background'>
			{children}
		</Button>
	);
}
