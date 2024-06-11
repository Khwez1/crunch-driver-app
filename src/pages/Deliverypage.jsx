import {  useParams, useLoaderData } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Deliverypage = () => {
    const { id } = useParams();
    const order = useLoaderData();

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                <Link
                    to="/"
                    className="text-red-500 hover:text-red-600 flex items-center"
                >
                    <FaArrowLeft className="fas fa-arrow-left mr-2"/> Back
                </Link>
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="container m-auto py-10 px-6">
                    <div className="w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                {/* <div className="text-gray-500 mb-4">{ order.title }</div> */}
                                <h1 className="text-3xl font-bold mb-4">
                                { order.title }
                                </h1>
                                <div
                                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-gray-800 text-lg font-bold mb-6">
                                Message
                                </h3>
                                <p className="mb-4">
                                {order.description}
                                </p>
                                <h3 className="text-gray-800 text-lg font-bold mb-2">Special Instructions</h3>
                                <p className="mb-4">{order.salary}</p>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
}

const orderLoader = async ({params}) => {
    const res = await axios.get(`http://localhost:8080/orders/${params.id}`);
    return res.data
}
 
export { Deliverypage as default, orderLoader } ;