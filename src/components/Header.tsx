import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      <header className="flex h-16 items-center justify-between bg-white px-5 md:h-28 md:px-10">
        <Link to="/">
          <img src="veridux-footer.svg" alt="logo" className="cursor-default" />
        </Link>
        <div className="text-primary lg:hidden " onClick={toggleOpenMenu}>
          {openMenu ? <IoClose /> : <RxHamburgerMenu />}
        </div>
        <ul className="hidden flex-row justify-between gap-6 text-secondary lg:flex">
          <li>
      
            <NavLink
              className={({ isActive }) =>
                `pb-2 hover:text-primary ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 hover:text-primary ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              to="contact-us"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 hover:text-primary ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              to="FAQ"
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 hover:text-primary ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              to="privacy"
            >
              Privacy Policy
            </NavLink>
          </li>
        </ul>

        <button className="hidden rounded-md bg-[#006FCF] px-5 py-2 text-white duration-300 hover:bg-blue-400 lg:block">
          <Link to="https://home.veridux.com.ng/login/email">
            Login / Sign Up
          </Link>
        </button>
      </header>
      {openMenu && (
        <ul className="justify-top flex h-[100dvh] w-full flex-col items-center gap-6 bg-[#F9F9F9] text-secondary lg:flex">
          <li>
            <NavLink
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `pb-2 ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              onClick={() => setOpenMenu(false)}
              to="contact-us"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              onClick={() => setOpenMenu(false)}
              to="FAQ"
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              onClick={() => setOpenMenu(false)}
              to="privacy"
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `pb-2 ${isActive ? "border-b-4 border-b-blue-500" : ""}`
              }
              onClick={() => setOpenMenu(false)}
              to="terms"
            >
              Terms & Conditions
            </NavLink>
          </li>
          <li className="rounded-md bg-[#006FCF] px-5 py-2 text-white duration-300 hover:bg-blue-400">
            <Link to="https://home.veridux.com.ng/login/email">
              Login / Sign Up
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
