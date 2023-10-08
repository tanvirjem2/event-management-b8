import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Footer from "./Footer";


const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <div className="border-2 mt-10 rounded-lg p-5">
                <Navbar />
                <Banner />
                <h2 className="text-center font-semibold text-4xl my-10">Our Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {services.map(service => <Service key={service.id} service={service}></Service>)}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;