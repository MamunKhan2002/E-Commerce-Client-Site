import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-[1360px] w-11/12 mx-auto">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Root;