import { hash, compare } from 'bcryptjs'

export const EncrypPassword = async (password) => {
    const hashPassword = await hash(password, 12);
    return hashPassword;
}

export const verifyPassword =  (password) => {
    const isValid =  compare(password, EncrypPassword);
    return isValid
};