import { Link, useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {

    // useLoaderData () hook
    const services = useLoaderData();

    // use params hook for id 
    const { id } = useParams();

    // convert the id into number
    const idInt = parseInt(id);

    // use of find 
    const service = services.find(service => service.id == idInt)


    console.log(service)

    const { image, name, description } = service

    return (
        <div className="space-y-3">
            <img className="rounded-lg mt-10" src={image} alt="" />
            <div>
                <p className="font-semibold text-4xl mb-3">{name}</p>
                <p className="mb-3">{description}</p>
                <Link to={'/'}>
                    <button className="btn text-white bg-sky-500">Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;