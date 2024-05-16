import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleOpenMenu (){
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <header className="flex h-16 items-center justify-between bg-white px-5 md:h-28 md:px-10">
        <div>
          <img src="/src/assets/veridux-logo.png" alt="logo" />
        </div>
        <div className="text-primary lg:hidden" onClick={toggleOpenMenu}>
          {openMenu ? <IoClose /> : <RxHamburgerMenu />}
        </div>
        <ul className="hidden flex-row justify-between gap-6 text-secondary lg:flex">
          <li>
            <NavLink className="border-b-4 border-b-primary pb-2" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="contact-us">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="privacy-policy">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="t&c">Terms&Conditions</NavLink>
          </li>
        </ul>

        <button className="hidden rounded-md bg-[#006FCF] px-5 py-2 text-white lg:block">
          Login / Sign Up
        </button>
      </header>
      {openMenu && (
        <ul className="justify-top flex h-[100dvh] w-full flex-col items-center gap-6 bg-[#F9F9F9] text-secondary lg:flex">
          <li>
            <NavLink
              onClick={() => setOpenMenu(false)}
              className="border-b-4 border-b-primary pb-2"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpenMenu(false)} to="contact-us">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpenMenu(false)} to="FAQ">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpenMenu(false)} to="privacy-policy">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpenMenu(false)} to="t&c">
              Terms&Conditions
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
