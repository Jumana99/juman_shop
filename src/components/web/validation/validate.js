import * as yup from 'yup';
export const registerSchema = yup.object({
    userName:yup.string().required("username is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
    email:yup.string().required("email is requierd").email(),
    password:yup.string().required("password is requierd").min(3,"must be at least 3 char").max(30,"max is 30 char")
})
