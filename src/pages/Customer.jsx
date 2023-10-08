import { AiTwotoneStar } from 'react-icons/ai';

const Customer = ({ customer }) => {

    const { id, name, reviewText, rating, img } = customer

    return (
        <div className="rounded-lg p-5 text-center space-y-2 shadow-lg">
            <img className="rounded-full w-[60px] h-[60px] mx-auto mb-10" src={img} alt="" />
            <p className="font-bold">{name}</p>
            <p>{reviewText}</p>
            <div className='flex items-center gap-1 mt-2 justify-center'>
                <AiTwotoneStar className='text-xl text-yellow-400' />
                <AiTwotoneStar className='text-xl text-yellow-400' />
                <AiTwotoneStar className='text-xl text-yellow-400' />
                <AiTwotoneStar className='text-xl text-yellow-400' />
                <AiTwotoneStar className='text-xl text-yellow-400' />
            </div>
        </div>
    );
};

export default Customer;