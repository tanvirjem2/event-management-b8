import { Link } from "react-router-dom";

const Service = ({ service }) => {

    console.log(service)

    const { name, image, description, id, price } = service

    return (
        <div className="border-2 rounded-lg p-5 flex flex-col">
            <img className="rounded-lg mx-auto mb-3 h-[200px] w-full" src={image} alt="" />
            <h2 className="font-semibold">{name}</h2>
            <h4 className="text-[#706F6F] mt-3">
                {
                    description.length > 100 ?
                        <p>{description.slice(0, 100)}
                            <Link
                                className="text-sky-600 font-semibold ml-2"
                                to={`/service/${id}`}>
                                Read More ...
                            </Link>
                        </p>
                        :
                        <p>{description}</p>
                }
            </h4>
            <div className="flex items-center justify-between mt-4">
                <button className="btn text-white bg-sky-500">Book Now</button>
                <button className="btn text-white bg-sky-500">Details</button>
            </div>
        </div>
    );
};

export default Service;