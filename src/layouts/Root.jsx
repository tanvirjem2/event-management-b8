import { Outlet } from "react-router-dom";
// import Header from "../Shared/Header";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Outlet />
        </div>
    );
};

export default Root;