import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const date = new Date();
const year = date.getFullYear();
const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col ">
      <div className="hidden w-full max-w-[1600px] mx-auto bg-blue-300 px-20 py-10 xl:block">
        <div className="grid items-center gap-10 rounded-2xl bg-primary px-20 lg:grid-cols-2">
          <div className="">
            <p className="mb-5 max-w-[400px] text-4xl font-semibold text-white">
              Download Veridux App on various platforms
            </p>
            <div className="flex flex-row gap-10">
              <img
                src="/src/assets/footer-google-playstore.png"
                alt="google playstore"
              />
              <img src="/src/assets/footer-ios-store.png" alt="ios store" />
            </div>
          </div>
          <div className="flex flex-row py-10">
            <img
              src="/src/assets/footer-image-1.png"
              alt="iphone image"
              className="max-2xl:h-[300px] w-[300px]"
            />
            <img
              src="/src/assets/footer-image-2.png"
              alt="iphone image"
              className="max-2xl:h-[300px] w-[300px]"
            />
          </div>
        </div>
      </div>
      <footer className="bg-[#0F172A] px-10 pt-10">
        <div className="flex flex-col items-center justify-between border-b-2 border-b-gray-400 pb-10 md:flex-row lg:pb-20">
          <Link to="/">
            <img src="/src/assets/veridux-logo.png" alt="logo"></img>
          </Link>
          <ul className="flex flex-col justify-between text-secondary max-md:text-center lg:flex-row lg:gap-5 ">
            <li className="duration-300 hover:text-blue-500 max-md:mt-2">
              <Link to="/">Home</Link>
            </li>
            <li className="duration-300 hover:text-blue-500 max-md:mt-2">
              <Link to="contact-us">Contact</Link>
            </li>
            <li className="duration-300 hover:text-blue-500 max-md:mt-2">
              <Link to="FAQ">FAQ</Link>
            </li>
            <li className="duration-300 hover:text-blue-500 max-md:mt-2">
              <Link to="privacy-policy">Privacy Policy</Link>
            </li>
            <li className="duration-300 hover:text-blue-500 max-md:mt-2">
              <Link to="t&c">Terms & Conditions</Link>
            </li>
          </ul>

          <div className="mt-5 flex flex-row items-center justify-center gap-3">
            <a
              href=""
              className="rounded-full bg-white px-4 py-4 text-center text-blue-400 duration-300 hover:bg-blue-400 hover:text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href=""
              className="rounded-full bg-white px-4 py-4 text-center text-blue-400 duration-300 hover:bg-blue-400 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href=""
              className="rounded-full bg-white px-4 py-4 text-center text-blue-400 duration-300 hover:bg-blue-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="rounded-full bg-white px-4 py-4 text-center text-blue-400 duration-300 hover:bg-blue-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <p className="pb-10 text-center text-secondary lg:mt-10">
          {/* <PiCopyrightLight /> */}
          &copy;Veridux {year} All Rights Reserved
        </p>
      </footer>
    </footer>
  );
};

export default Footer;

// twitter fb, ig, github
