import Laptop from '../assets/laptop.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-indigo-500 font-bold '>HOW IT WORKS</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Instructions</h1>
                    <p>
                    <br/>
                    <ol>
                        <li>
                            1. Type or paste a behavioural question to the question you&apos;ve provided.
                        </li>
                        <li>
                            2. Type or paste your answer to the question you&apos;ve provided in the text box.
                        </li>
                        <li>
                            3. Click the &quot;Submit&quot; button to submit your answer for analysis.
                        </li>
                        <li>
                            4. The analysis will give you feedback on what you did wrong and what to improve.
                        </li>
                        <li>
                            5. Review the feedback and tips provided.   
                        </li>
                        <li>
                            6. Repeat steps 1-5 as often as you like to improve your interviewing skills.    
                        </li>
                    </ol>
                    <br/>
                    Please note that our analysis is based on NLP techniques, it will give you a general idea of your answer and a feedback but it&apos;s not a substitute for a human hiring manager or an interviewer evaluation. It&apos;s just a tool to help you practice and improve your interviewing skills.
                    </p>
                    <Link to="/input">
                    <button className='bg-black text-indigo-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;