import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getcart } from "../../redux/cart/cartSlice";
interface addreesDetails {

    details: string,
    phone: string,
    city: string

}
export default function Checkout() {
    const token = useSelector((state: RootState) => state.auth.token);
    const [searchParams] = useSearchParams();
    const cartId = searchParams.get("cartId");
    const [paymentMethod, setPaymentMethod] = useState("cash"); 
    const dispatch = useDispatch();
    async function handleChickoutVisa(values: addreesDetails) {
        const shippingAddress = { shippingAddress: values };

        try {
            const res = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://e-commerce-alpha-green-53.vercel.app/`,
                shippingAddress,
                {
                    headers: { token }
                }
            );

            console.log("Success", res.data.session.url);
            window.location.href = res.data.session.url; 

        } catch (error) {
        }
    }

    async function handleChickout(values: addreesDetails) {
        const shippingAddress = { shippingAddress: values };


        const res = await axios.post(
            `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
            shippingAddress,
            {
                headers: { token }
            }
        );

        console.log("Success", res);
        if (token) {
            dispatch<any>(getcart(token))

        }

    }
    const formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: ''
        },
        onSubmit: (values) => {
            if (paymentMethod === "visa") {
                handleChickoutVisa(values);
            } else {
                handleChickout(values);
            }
        }
    });
    return (
        <>

            <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-black">Details</label>
                    <input type="text" onChange={formik.handleChange} value={formik.values.details} id="details" name="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-black">Phone</label>
                    <input type="text" onChange={formik.handleChange} value={formik.values.phone} id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-black">City</label>
                    <input type="text" onChange={formik.handleChange} id="city" value={formik.values.city} name="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-black">Payment Method</label>
                    <div className="flex items-center">
                        <input type="radio" id="cash" name="paymentMethod" value="cash" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} className="mr-2" />
                        <label htmlFor="cash" className="mr-4">Cash</label>

                        <input type="radio" id="visa" name="paymentMethod" value="visa" checked={paymentMethod === "visa"} onChange={() => setPaymentMethod("visa")} className="mr-2" />
                        <label htmlFor="visa">Visa</label>
                    </div>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                    Submit
                </button>
            </form>

        </>
    )
}
