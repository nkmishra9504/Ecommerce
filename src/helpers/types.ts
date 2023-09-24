export enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

export interface ILogin {
    email: string
    password: string
}

export interface IRegister {
    firstName: string
    lastName: string
    email: string
    password: string
}