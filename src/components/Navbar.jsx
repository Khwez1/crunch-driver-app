import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="bg-white border-b border-gray-300">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div
                className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                >
                {/* <!-- Logo --> */}
                <NavLink className="flex flex-shrink-0 items-center mr-4" to="/about">
                    <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="React Jobs"
                    />
                    <span className="text-gray-900 text-lg md:text-2xl font-semibold md:font-bold ml-2"
                    >Hi, David👋</span
                    >
                </NavLink>
                <div className="md:ml-auto">
                    <div className="flex space-x-2">
                    <NavLink
                        to="/history"
                        ><span className='text-red-600 border-red-600 border-2 bg-white 
                        rounded-lg p-2 font-semibold shadow-xl  hover:bg-red-600 hover:text-white transition ease-out duration-500'>History</span></NavLink
                    >
                    <NavLink
                        to="/liked"
                        ><span className='text-red-600 border-red-600 border-2 bg-white 
                        rounded-lg p-2 font-semibold shadow-xl  hover:bg-red-600 hover:text-white transition ease-out duration-500'>Liked</span></NavLink
                    >
                    </div>
                </div>
                </div>
            </div>
            </div>
        </nav>
    );
}
 
export default Navbar;