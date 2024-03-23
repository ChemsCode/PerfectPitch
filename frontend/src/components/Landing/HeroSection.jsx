import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-indigo-500 font-bold p-2">
                    IMPROVE YOUR INTERVIEW SKILLS
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Achieve your dreams.
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        Get a job in
                    </p>
                    <ReactTyped 
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={["TECH", "FINANCE", "CONSULTING"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                    Achieve your dream job with our NLP-based interviewing tool for Behavioural Interviews
                </p>
                <Link to="/home">
                <button className="bg-indigo-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                    Get Started
                </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;