import React, { useEffect, useState } from 'react';
import Delivery from './delivery'; // Corrected import
import axios from 'axios';

const Deliveries = () => {
    const[orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
            const res = await axios.get('http://localhost:8080/orders');
            setOrders(res.data)
            } catch (error) {
            console.log('error fetching data', error);
            }
        }
        getOrders()
    }, [])

    return (
        <section className="bg-gray-100 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                    Deliveries
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {orders.map((delivery) => (
                        <Delivery key={delivery.id} delivery={delivery} /> // Corrected usage
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Deliveries;