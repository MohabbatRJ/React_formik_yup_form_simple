import { useFormik } from 'formik';
import React from 'react'
import { addDetailSchemas } from '../schemas';

const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    confirm_email: "",
    company_name: "",
    country: "",
    city: "",
};

export default function Form() {
    const styles = { color: 'red' };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: addDetailSchemas,
        onSubmit: (values,action) => {
            console.log("Values", values)
            action.resetForm();
        }
    });

    console.log(errors); 



    return (
        <>
            <div className='container-fluid my-3 '>
                <div className='mx-5'>
                    <h1>Details</h1>
                </div>

                <div className='d-flex justify-content-center'>
                    <form className='w-50' onSubmit={handleSubmit}>
                        <div className='row'>
                        <div className="mb-2 col">
                            <label htmlFor="first_name" className="me-2 mb-2 ">
                                First Name
                            </label>
                            <span style={styles}>*</span>
                            <input
                                className='form-control col-6'
                                type="name"
                                autoComplete="off"
                                name="first_name"
                                id="first_name"
                                placeholder="First Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.first_name && touched.first_name ? (
                                    <p className='m-auto mt-1'style={styles}>{errors.first_name}</p>
                                ) : null
                            }
                        </div>

                        <div className="mb-2 col">
                            <label htmlFor="last_name" className="me-2 mb-2">
                                Last Name
                            </label>
                            <span style={styles}>*</span>
                            <input
                                className='form-control'
                                type="name"
                                autoComplete="off"
                                name="last_name"
                                id="last_name"
                                placeholder="Last Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.last_name && touched.last_name ? (
                                    <p className='m-auto mt-1'style={styles}>{errors.last_name}</p>
                                ) : null
                            }
                        </div>
                        </div>
                        

                        <div className="mb-2">
                            <label htmlFor="email" className="me-2 mb-2">
                                Email
                            </label>
                            <span style={styles}>*</span>
                            <input
                                className='form-control'
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.email && touched.email ? (
                                    <p className='m-auto mt-1'style={styles}>{errors.email}</p>
                                ) : null
                            }
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="me-2 mb-2">
                                Confirm Email
                            </label>
                            <span style={styles}>*</span>
                            <input
                                className='form-control'
                                type="email"
                                autoComplete="off"
                                name="confirm_email"
                                id="confirm_email"
                                placeholder="Confirm Email"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.confirm_email && touched.confirm_email ? (
                                    <p className='m-auto mt-1'style={styles}>{errors.confirm_email}</p>
                                ) : null
                            }
                        </div>

                        <div className="mb-2">
                            <label htmlFor="company_name" className="me-2 mb-2">
                                Company Name (Optional)
                            </label>
                            <input
                                className='form-control'
                                type="name"
                                autoComplete="off"
                                name="company_name"
                                id="company_name"
                                placeholder="Company Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            
                        </div>
                        
                        <div className='row'>
                            
                        <div className="mb-2 col">
                            <label htmlFor="country" className="me-2 mb-2">
                                Country
                            </label>
                            <span style={styles}>*</span>
                            <input
                                className='form-control'
                                type="name"
                                autoComplete="off"
                                name="country"
                                id="country"
                                placeholder="Country"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.country && touched.country ? (
                                    <p className='m-auto mt-1'style={styles}>{errors.country}</p>
                                ) : null
                            }
                        </div>

                        <div className="mb-2 col">
                            <label htmlFor="city" className="me-2 mb-2">
                                City
                            </label>
                            <span style={styles}>*</span>
                            <input
                                className='form-control'
                                type="name"
                                autoComplete="off"
                                name="city"
                                id="city"
                                placeholder="City"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.city && touched.city ? (
                                    <p className='m-auto mt-1'style={styles}>{errors.city}</p>
                                ) : null
                            }
                        </div>
                        </div>

                        <div className="buttons mt-3">
                            <button className="btn btn-success w-100 mt-2" type="submit">
                                Add Detail
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
