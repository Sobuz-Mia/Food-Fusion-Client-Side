
import CountUp from 'react-countup';

const YearlyInfo = () => {
    return (
        <div className='flex justify-around'>
         <div className='text-center '>
            <img className='w-40 h-40 mx-auto' src="https://img.freepik.com/premium-vector/full-gift-open-closed-santa-claus-red-bag-isolated-white-vector-cartoon-illustration-eps-10_505557-551.jpg?w=740" alt="" />
            <CountUp
            end={810000}
            duration={5}
            className='text-2xl'
            />
            <h2 className='text-2xl'>Meals distributed in 2022</h2>
         </div>
         <div></div>
         <div></div>   
        </div>
    );
};

export default YearlyInfo;