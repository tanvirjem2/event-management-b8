import { useLoaderData } from "react-router-dom";
import Detail from "./Detail";
import Navbar from "../Shared/Navbar";


const AppliedDetails = () => {

    // useLoaderData hook
    const details = useLoaderData();

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-2 gap-4 mt-10">
                {details.map(detail => <Detail key={detail.id} detail={detail}></Detail>)}
            </div>
        </div>
    );
};

export default AppliedDetails;