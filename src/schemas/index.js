import * as Yup from 'yup'

export const addDetailSchemas = Yup.object({
    first_name : Yup.string().min(2).max(25).required("First Name Required"),
    last_name : Yup.string().min(2).max(25).required("Last Name Required"),
    email : Yup.string().email().required("Email Required"),
    confirm_email : Yup.string().email().required("Confirm Email Required").oneOf([Yup.ref('email'), null], 'Email Must Match'),
    country : Yup.string().required("Country Required"),
    city : Yup.string().required("City Required"),
}) 