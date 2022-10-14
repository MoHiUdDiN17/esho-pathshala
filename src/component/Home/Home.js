import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const topic = useLoaderData();
    const cart = topic.data;
    return (
        <div className="mt-5 ms-5 mb-5 me-5 row row-cols-1 row-cols-lg-4 g-4">
            {

                cart.map(eachcart => <Cart
                    eachcart={eachcart}
                ></Cart>)
            }
        </div>
    );
};

export default Home;