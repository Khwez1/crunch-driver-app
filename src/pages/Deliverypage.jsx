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
                            <div className="bg-white text-center p-6 rounded-lg shadow-md mt-6">
                                <Link
                                    to={``}
                                    className="text-red-600 border-red-600 border-2 bg-white 
                                    rounded-lg p-2 font-semibold shadow-xl  hover:bg-red-600 hover:text-white transition ease-out duration-500 py-2 px-4 w-full focus:outline-none focus:shadow-outline"
                                >
                                    Accept
                                </Link>
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