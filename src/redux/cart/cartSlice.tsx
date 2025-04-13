import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


interface cartState {
    numOfCartItems: number | 0,
    cartId: string,
    data: {
        _id: string | null,
        cartOwner: string | null,
        products:
        {
            count: number | 0,
            _id: string | null,
            product: {
                _id: string,
                title: string,
                quantity: number,
                imageCover: string
            },
            price: number | 0
        }[],




        totalCartPrice: number | 0

    },

}
const initialState: cartState = {
    numOfCartItems: 0,
    cartId: "",
    data: {
        _id: null,
        cartOwner: null,
        products: [
            {
                count: 0,
                _id: null,
                product:
                {
                    _id: '',
                    title: '',
                    quantity: 0,
                    imageCover: ''
                },
                price: 0
            },



        ],
        totalCartPrice: 0
    },

};

export const getcart = createAsyncThunk('cart/getCart', async function (token: string) {
    const response = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers: { token } });
    return response.data
})

export const postCart = createAsyncThunk('cart/postCart', async function ({ token, productId }: { token: string; productId: string }) {
    await axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId }, { headers: { token } });
    const res = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
        headers: { token },
    });
    return res.data;
})

export const putCart = createAsyncThunk('cart/putCart', async function ({ token, count, productid }: { token: string | null; count: number, productid: string }) {

    const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`, { count }, { headers: { token } });

    return res.data;
})


export const removespecficCart = createAsyncThunk('cart/removespecficCart', async function ({ token, productid }: { token: string | null, productid: string }) {

    const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`, { headers: { token } });

    return res.data;
})

export const clearCart = createAsyncThunk('cart/clearCart', async function ({ token }: { token: string | null }) {

    await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers: { token } });

    return initialState;
})


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        // getCart: function (initialState) {

        //     initialState.numOfCartItems ++
        //     console.log(initialState.numOfCartItems);

        // },

        // postCart: function () { },
        // updateCart: function () { },

    },
    extraReducers: function (builder) {
        builder.addCase(getcart.fulfilled, function (initialState, action) {

            initialState.data = action.payload.data;
            initialState.numOfCartItems = action.payload.numOfCartItems;
            initialState.cartId = action.payload.cartId;

        })

        builder.addCase(postCart.fulfilled, function (initialState, action) {

            initialState.data = action.payload.data;
            initialState.numOfCartItems = action.payload.numOfCartItems;
            initialState.cartId = action.payload.cartId;


        })

        builder.addCase(putCart.fulfilled, function (initialState, action) {

            initialState.data = action.payload.data;
            initialState.numOfCartItems = action.payload.numOfCartItems;
            initialState.cartId = action.payload.cartId;




        })

        builder.addCase(removespecficCart.fulfilled, function (initialState, action) {

            initialState.data = action.payload.data;
            initialState.numOfCartItems = action.payload.numOfCartItems;


        })

        builder.addCase(clearCart.fulfilled, function (initialState, action) {

            initialState.data = action.payload.data;
            initialState.numOfCartItems = action.payload.numOfCartItems;


        })


    }
})




export default cartSlice.reducer;
