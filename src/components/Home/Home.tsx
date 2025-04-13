import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

export default function Home() {
    interface productState {
        sold: number,
        images: [],
        subcategory: [],
        ratingsQuantity: number,
        _id: string,
        title: string,
        slug: string,
        description: string,
        quantity: number,
        price: number,
        imageCover: string,
        category: {
            _id: string,
            name: string,
            slug: string,
            image: string
        },
        brand: {

            _id: string,
            name: string,
            slug: string,
            image: string

        },
        ratingsAverage: number

    }

    const token = useSelector((state: RootState) => state.auth.token);
    const [product, setproduct] = useState<productState[]>([])
    async function handleProduct() {
        const response = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
        setproduct(response.data.data);
    };



    useEffect(() => {
        handleProduct()



    }, [])
    useEffect(() => {
        if (product.length > 0) {
            console.log("Updated Product:", product);
        }
    }, [product]);


    return (
        <>
            {token ? <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-hidden">
                {product.map((el) => (

                    <Product key={el._id} data={el} />
                ))
                }

            </div> : <div> Please Log in</div>}



        </>)
}
