import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout: React.FC = () => {
    return (
        <div className="font-sans">
            <ToastContainer />
            <Header />
            <main className="w-full bg-white mx-auto">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
