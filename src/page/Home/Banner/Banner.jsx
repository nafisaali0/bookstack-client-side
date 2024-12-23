import Lottie from "lottie-react";
import hero from "../../../../public/hero.json";

const Banner = () => {
    return (
        <>
            {/* <div className="bg-indigo-900 text-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6 space-y-8 md:space-y-0">
                    <div className="md:w-1/2">
                        <h4 className="text-sm uppercase tracking-widest mb-2">Back to School</h4>
                        <h1 className="text-4xl font-bold mb-4">
                            Special <span className="text-yellow-400">60% Off</span>
                        </h1>
                        <p className="text-lg mb-6">
                            Students are eligible for a 60% discount on books. Get access now.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold py-2 px-6 rounded">
                                Learn more
                            </button>
                            <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-indigo-900 text-white font-semibold py-2 px-6 rounded">
                                What they say
                            </button>
                        </div>
                        <p className="mt-8 text-sm">Our partner</p>
                        <div className="flex items-center space-x-4 mt-2">
                            <span>🌟 Highglow</span>
                            <span>✨ emajine</span>
                            <span>⚡ GlowUP</span>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://via.placeholder.com/400x300"
                            alt="Illustration"
                            className="w-full max-w-sm mx-auto"
                        />
                    </div>
                </div>
            </div> */}

            {/* new checking */}
            <div className="hero min-h-screen bg-black text-white">

                {/* checking */}
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6 space-y-8 md:space-y-0">
                    <div className="md:w-1/2">
                        <h4 className="text-sm uppercase tracking-widest mb-2">Winter Vacation Sale</h4>
                        <h1 className="text-4xl font-bold mb-4">
                            Special <span className="text-yellow-400">60% Off</span> for Readers
                        </h1>
                        <p className="text-lg mb-6">
                            Enjoy your winter break with a 60% discount on books. Do not miss out—use code <span className="font-semibold text-yellow-400">WINTER60</span> to save now!
                        </p>

                        <div className="flex space-x-4">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold py-2 px-6 rounded">
                                Learn more
                            </button>
                            <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-indigo-900 text-white font-semibold py-2 px-6 rounded">
                                What they say
                            </button>
                        </div>
                        <p className="mt-8 text-sm">Our partner</p>
                        <div className="flex items-center space-x-4 mt-2">
                            <span>🌟 Highglow</span>
                            <span>✨ emajine</span>
                            <span>⚡ GlowUP</span>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        {/* <img
                            src="https://via.placeholder.com/400x300"
                            alt="Illustration"
                            className="w-full max-w-sm mx-auto"
                        /> */}
                        <Lottie animationData={hero} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner
