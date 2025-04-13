import axios from "axios";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup"
import { setToken } from "../../redux/auth/authSlice";
interface values {
    name: string,
    email: string,
    password: string,
    rePassword: string,
    phone: string,
}
export default function Register() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    async function handleregister(value: values) {
        const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", value)
        console.log(response, 'response');


        dispatch(setToken(response.data.token));
        nav("/")
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        },
        onSubmit: (values: values) => {
            handleregister(values)
        },
        validationSchema: yup.object().shape({

            name: yup.string().required("this is required").min(4, "between 4 to 12 char").max(15, "between 4 to 12 char"),
            email: yup.string().email('Invalid email address').required('Email is required'),
            password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Please confirm your password'),
            phone: yup.string().matches(/^0[0125][0-9]{9}$/, 'Phone number must be exactly 11 digits').required("Please enter your phone number"),

        }),

    });
    return (
        <>
            <section className="bg-gray-50 mt-5">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                                    {formik.errors.name && formik.touched.name && (
                                        <div className="text-red-500 text-sm">{formik.errors.name}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                                    {formik.errors.email && formik.touched.email && (
                                        <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                    {formik.errors.password && formik.touched.password && (
                                        <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type="password" name="rePassword" id="rePassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                    {formik.errors.rePassword && formik.touched.rePassword && (
                                        <div className="text-red-500 text-sm">{formik.errors.rePassword}</div>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="text" name="phone" id="phone" placeholder="0111111xx" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                    {formik.errors.phone && formik.touched.phone && (
                                        <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                                    )}
                                </div>

                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline ">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
