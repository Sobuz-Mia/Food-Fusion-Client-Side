
import CountUp from 'react-countup';

const YearlyInfo = () => {
    return (
        <div className='flex justify-around flex-col md:flex-row items-center '>
         <div className='text-center w-1/3 mb-5 md:mb-0'>
            <img className='w-40 h-40 mx-auto' src="https://img.freepik.com/premium-vector/full-gift-open-closed-santa-claus-red-bag-isolated-white-vector-cartoon-illustration-eps-10_505557-551.jpg?w=740" alt="" />
            <CountUp
            end={810000}
            duration={5}
            className='text-2xl font-semibold'
            />
            <h2 className='text-2xl font-semibold'>Meals distributed in 2022</h2>
         </div>
         <div className='text-center  w-1/3 mb-5 md:mb-0'>
            <img className='w-40 h-40 mx-auto rounded-full p-3' src="https://img.freepik.com/free-vector/hand-drawn-community-spirit-illustration_52683-108497.jpg?w=740&t=st=1699299948~exp=1699300548~hmac=45ca04c374a6f116eda12a16cba3163c655a27838c36c8411384f1d3f2b1967d" alt="" />
            <CountUp
            end={8760000}
            duration={5}
            className='text-2xl font-semibold'
            />
            <h2 className='text-2xl font-semibold'>Pounds of food rescued each year</h2>
         </div>
         <div className='text-center  w-1/3 mb-5 md:mb-0'>
            <img className='w-40 h-40 mx-auto rounded-full p-3' src="https://img.freepik.com/free-vector/vase-with-money-charity-donation_24877-54488.jpg?w=740&t=st=1699300158~exp=1699300758~hmac=c039b1cae03ae28570d9837207b39ab5f46738c074a75aef4bd26f92557dec8e" alt="" />
            <CountUp
            end={8760000}
            duration={5}
            className='text-2xl font-semibold'
            />
            <h2 className='text-2xl font-semibold'>The value of meals distributed in 2022</h2>
         </div>  
        </div>
    );
};

export default YearlyInfo;