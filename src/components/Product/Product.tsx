import { Link } from "react-router-dom";

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
type ProductProps = {
    data: productState;
};
export default function Product(props: ProductProps) {
    const { data } = props
    return (
        <>
            <Link to={`singleproduct/${data._id}`}>
                <img src={data.imageCover} className="h-1/2 w-full" alt="product" />
                <h3 >{data.title}</h3>
                <p>{data.description.split(" ").slice(0, 20).join(" ")}...</p>
                <p>{data.price}</p>

            </Link>


        </>
    )
}
