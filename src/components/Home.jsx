import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/orders"
        className="block text-center text-red-600 border-red-600 border-2 bg-white ml-1
        rounded-xl py-2 px-4 font-semibold shadow-xl  hover:bg-red-600 hover:text-white transition ease-out duration-500"
        >View All Deliveries</Link
      >
    </section>
    </>
  );
}
 
export default Home;