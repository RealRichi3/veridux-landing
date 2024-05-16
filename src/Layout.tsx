import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
