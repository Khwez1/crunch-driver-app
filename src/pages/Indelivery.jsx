import {  useParams, useLoaderData } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Indelivery = () => {
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
                                className="bg-white max-w-lg: p-6 rounded-lg shadow-md text-start md:text-start"
                            >
                                <div
                                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-center"
                                >
                                    <img src={order.imageSrc} className="w-54 h-64 rounded-xl" />
                                </div>
                                <div
                                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <iframe src={order.mapLocation} className="w-full" />
                                </div>
                                <h2 className="font-bold text-lg">Price</h2>
                                <p className="mb-4">
                                    {order.price}
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-gray-800 text-lg font-bold mb-6">
                                Message
                                </h3>
                                <p className="mb-4">
                                </p>
                                <h3 className="text-gray-800 text-lg font-bold mb-2">Special Instructions</h3>
                                <p className="mb-4"></p>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Indelivery;