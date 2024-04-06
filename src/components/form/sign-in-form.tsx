"use client";

import { signInFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import GoogleSignInButton from "../google-sign-in-button";

export default function SignInForm() {
	const form = useForm<z.infer<typeof signInFormSchema>>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof signInFormSchema>) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form className='' onSubmit={form.handleSubmit(onSubmit)}>
				<div className='space-y-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type='email'
										className='bg-background'
										placeholder='mail@example.com'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type='password'
										className='bg-background'
										placeholder='enter your password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button className='text-primary-foretext mt-6 w-full' type='submit'>
					Sign in
				</Button>
			</form>
			<div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
				or
			</div>
			<GoogleSignInButton>Sign in with Google</GoogleSignInButton>

			<p className='text-center text-sm text-gray-600 mt-2'>
				If you don&apos;t have an account, please&nbsp;
				<Link
					className='text-blue-500 hover:underline font-bold'
					href='/sign-up'>
					Sign up
				</Link>
			</p>
		</Form>
	);
}
