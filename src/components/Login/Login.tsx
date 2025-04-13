import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/auth/authSlice';
import { getcart } from "../../redux/cart/cartSlice"
import { AppDispatch } from '../../redux/store';

interface vlaue {
    email: '',
    password: ''
}
export default function Login() {
    const nav = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    async function handleLogin(vlaue: vlaue) {
        const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", vlaue)


        dispatch(setToken(response.data.token));
        if (response.data.token) {
            dispatch(getcart(response.data.token))

        }
        nav("/")

    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values: vlaue) => {
            handleLogin(values)
        },
    })
    return (
        <>
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                </div>


                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">Login</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    haven't an account? <Link to="/register" className="font-medium text-primary-600 hover:underline ">Register here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
