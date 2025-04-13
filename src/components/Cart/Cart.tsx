import { useEffect } from "react"
import { getcart, putCart, removespecficCart } from "../../redux/cart/cartSlice"
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from "../../redux/store";
import { clearCart } from './../../redux/cart/cartSlice';
import { Link } from "react-router-dom";


export default function Cart() {
    const token = useSelector((state: RootState) => state.auth.token);
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch<AppDispatch>()

    function incrisecount(i: number) {
        const count = cart.data.products[i].count + 1;
        dispatch(putCart({ token, count, productid: cart.data.products[i].product._id }))


    }
    function DecreaseCount(i: number) {
        const count = cart.data.products[i].count - 1;
        dispatch(putCart({ token, count, productid: cart.data.products[i].product._id }))


    }

    function removespecficcart(i: number) {
        dispatch(removespecficCart({ token, productid: cart.data.products[i].product._id }))


    }

    function clearcart() {
        dispatch(clearCart({ token }))



    }


    useEffect(() => {

        if (token) {
            dispatch(getcart(token))

        }

    }, [])


    return (
        <>



            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                count
                            </th>

                            <th scope="col" className="px-6 py-3">
                                +
                            </th>
                            <th scope="col" className="px-6 py-3">
                                -
                            </th>
                            <th scope="col" className="px-6 py-3">
                                delete
                            </th>
                        </tr>
                    </thead>
                    {token ? <tbody>
                        {cart.data.products.map((el, i) => {
                            return (<tr className="bg-white border-b  border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   ">
                                    <img src={el.product.imageCover} className="w-1/2 h/12" />
                                </th>
                                <td className="px-6 py-4">
                                    {el.product.title}
                                </td>
                                <td className="px-6 py-4">
                                    {el.price}
                                </td>
                                <td className="px-6 py-4">
                                    {el.count}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => { incrisecount(i) }}>                                    +
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => { DecreaseCount(i) }}>                                    -
                                    </button>
                                </td>

                                <td className="px-6 py-4">
                                    <button onClick={() => { removespecficcart(i) }}>                                 delete
                                    </button>
                                </td>

                            </tr>)
                        })}


                    </tbody> : <div>please login</div>}
                </table>
                <div className="text-gray-700 uppercase bg-gray-50  w-full text-center"><h1 >Total Price : {cart.data.totalCartPrice}</h1></div>
                <button onClick={clearcart} type="button" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5  "> clear cart </button>
                <Link to={`/checkout?cartId=${cart.cartId}`} className="mt-6 flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">CheckOut</Link>

            </div>




        </>
    )
}
