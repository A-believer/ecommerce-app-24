import * as z from 'zod'

export const signInFormSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters!')
})

export const signUpFormSchema = z.object({
    username: z
        .string()
        .min(1, 'Username is required')
        .max(100),
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters!'),
    confirmPassword: z
        .string()
        .min(1, 'Password is required')
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confrimPassword'],
    message: 'Password does not match'
})


export const userSchema = z.object({
    username: z
        .string()
        .min(1, 'Username is required')
        .max(100),
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters!')
})