const Hero = () => {
    return (
        <section className="bg-white py-5 mb-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
            <div className="flex flex-col sm:flex-row items-start">
                <input
                    type="text"
                    className="border-2 border-black shadow-lg rounded-xl w-70 h-2 py-5 px-3 mb-2"
                    placeholder="Search"
                    required
                />
                <div className="flex justify-between">
                    <a
                        href="/add-job"
                        className="text-red-600 border-red-600 border-2 bg-white ml-1
                        rounded-xl py-2 px-4 font-semibold shadow-xl  hover:bg-red-600 hover:text-white transition ease-out duration-500"
                    >
                        Latest
                    </a>
                    <a
                        href="/jobs"
                        className="text-red-600 border-red-600 border-2 bg-white ml-2
                        rounded-xl py-2 px-4 font-semibold shadow-xl  hover:bg-red-600 hover:text-white transition ease-out duration-500"
                    >
                        Nearby
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Hero;