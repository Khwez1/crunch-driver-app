import Card from './Card';
import map from '../assets/Ocean.png';
import mapIcon from '../assets/map-icon.png';
import map2 from '../assets/Nandos.png';
import map3 from '../assets/Wimpy.png'


const Home = () => {
  return (
    <>
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="/jobs"
        className="block text-center text-red-600 border-red-600 border-2 bg-white ml-1
        rounded-xl py-2 px-4 font-semibold shadow-xl  hover:bg-red-600 hover:text-white transition ease-out duration-500"
        >View All Deliveries</a
      >
    </section>
    </>
  );
}
 
export default Home;