import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import errorAnimation from '../assets/29894-error-404-page.json'

const ErrorPage = () => {
    const nevigate = useNavigate();
    return (
            <div className='w-1/2 flex-col flex justify-center items-center mx-auto relative'>
                <Lottie className='w-full' animationData={errorAnimation} loop={true} />;
                <button onClick={nevigate('/')} className='btn btn-primary absolute bottom-0 mb-5'>Back To Home</button>
            </div>
       
    );
};

export default ErrorPage;