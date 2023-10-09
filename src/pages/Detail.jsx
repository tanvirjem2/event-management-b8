import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Detail = ({ detail }) => {

    useEffect(() => {
        Aos.init();
    }, [])

    const { name, image, description, id, price } = detail;

    return (
        <div data-aos="zoom-out-up" className="border-2 rounded-lg p-5 flex flex-col">
            <img className="rounded-lg mx-auto mb-3 h-[200px] w-full" src={image} alt="" />
            <h2 className="font-semibold">{name}</h2>
            <h4 className="text-[#706F6F] mt-3">
                <p>{description}</p>
            </h4>
            <p className="font-semibold mt-5">{price}</p>
        </div>
    );
};

export default Detail;