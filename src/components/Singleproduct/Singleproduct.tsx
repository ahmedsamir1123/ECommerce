import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppDispatch, RootState } from "../../redux/store"
import { useDispatch } from "react-redux"
import { postCart } from "../../redux/cart/cartSlice"
interface singleProductState {

    sold: number,
    images: [string],
    subcategory: [
        {
            _id: string,
            name: string,
            slug: string,
            category: string
        }
    ],
    ratingsQuantity: number,
    _id: string,
    title: string,
    slug: string,
    description: string,
    quantity: number,
    price: number,
    imageCover: string,
    category:
    {
        _id: string,
        name: string,
        slug: string,
        category: string
    }
    ,
    brand: {
        _id: string,
        name: string,
        slug: string,
        category: string
    },
    ratingsAverage: number,
    createdAt: string,
    updatedAt: string,
    reviews: [],
    id: string

}


export default function Singleproduct() {
    const token = useSelector((state: RootState) => state.auth.token);

    const dispatch = useDispatch<AppDispatch>()

    const { id } = useParams() as { id: string };
    const [data, setData] = useState<singleProductState>()
    async function handleaddtocart() {
        if (token) {
            await dispatch(postCart({ token, productId: id }));


        }
    }
    async function handleProduct() {
        const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        setData(response.data.data);
    };


    useEffect(() => {
        handleProduct()



    }, [])
    return (
        <div className="flex">
            <div className="w-1/2">
                <img src={data?.imageCover} className="w-1/2 h-1/2" /></div>
            <div className="w-1/2 ">
                <h1 className="text-3xl">{data?.title}</h1>
                <p>{data?.description}</p>
                <p>{data?.price}</p>
                <button onClick={handleaddtocart} className='w-full bg-blue-600 text-white'> add to cart </button>
            </div>
        </div>
    )
}
