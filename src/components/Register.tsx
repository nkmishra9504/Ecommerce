import { IRegister } from "@/helpers/types";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from "@/helpers/YupSchema";
import Link from "next/link";

const initialState: IRegister = {
    firstName: '',
    lastName: '',
    email:'',
    password:'',
}

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<IRegister>({resolver: yupResolver(RegisterSchema)});
    const onSubmit: SubmitHandler<IRegister> = (data) => console.log(data);

    return (
        <div className="border-2 p-10 rounded">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="First Name" crossOrigin={undefined} {...register("firstName")} />
                        <p>{errors.firstName?.message}</p>
                        <Input size="lg" label="Last Name" crossOrigin={undefined} {...register("lastName")} />
                        <p>{errors.lastName?.message}</p>
                        <Input size="lg" label="Email" crossOrigin={undefined} {...register("email")} />
                        <p>{errors.email?.message}</p>
                        <Input size="lg" label="Password" crossOrigin={undefined} {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link href='/login' className="font-medium text-gray-900">
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}