import * as yup from 'yup';

export const LoginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(5)
});

export const RegisterSchema = yup.object({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
    email: yup.string().required().email(),
    password: yup.string().required().min(5)
})