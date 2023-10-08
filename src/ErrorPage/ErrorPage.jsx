import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="gap-4 p-5">
            <img className="h-[450px] mx-auto" src="https://i.ibb.co/QYh0CPg/404-error-template-3.webp" alt="" />
            <div className="flex items-center justify-center gap-4">
                <h2 className="font-extrabold">Oops!!!!</h2>
                <Link>
                    <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white btn">Go Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;