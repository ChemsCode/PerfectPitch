import Laptop from '../../assets/laptop.png';
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-indigo-500 font-bold '>ABOUT THE PROJECT</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>NLP-Based Interview Analysis Tool</h1>
                    <p>
                    Our project is an NLP-based interviewing analysis tool that helps job candidates improve their interviewing skills by analyzing their answers to chosen questions. With this tool, you will be able to identify your strengths and weaknesses, and receive valuable feedback on how to improve your answers. By using this tool, you will be better prepared for your next interview and increase your chances of landing your dream job.
                    </p>
                    <Link to="/home">
                    <button className='bg-black text-indigo-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;