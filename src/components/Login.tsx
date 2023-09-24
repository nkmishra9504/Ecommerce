'use client'
import { ILogin } from "@/helpers/types";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from "@/helpers/YupSchema";
import Link from "next/link";


export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({resolver: yupResolver(LoginSchema)});
    const onSubmit: SubmitHandler<ILogin> = (data) => console.log(data);

    return (
        <div className="border-2 p-10 rounded">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter details to login
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Email" crossOrigin={undefined} {...register("email")} />
                        <p>{errors.email?.message}</p>
                        <Input type="password" size="lg" label="Password" crossOrigin={undefined} {...register("password", { required: true, minLength: 5 })} />
                        <p>{errors.password?.message}</p>
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        LOGIN
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Do not have an account?{" "}
                        <Link href="/register" className="font-medium text-gray-900">
                            Sign up
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}