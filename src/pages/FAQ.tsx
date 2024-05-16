import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const FAQ: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [openID, setOpenID] = useState(0)

    const toggleOpen = () => {
        setIsOpen((isOpen) => !isOpen)
    }
  return (
    <div>
      <section
        aria-labelledby="FAQ"
        className="flex flex-col items-center bg-[#EBF3FB] py-10 max-sm:px-5 md:flex-row md:justify-center md:py-20 md:pl-20 "
      >
        <div className="max-w-[500px] ">
          <h2 className="mb-4 text-3xl font-semibold text-black md:text-5xl">
            Explore Veridux FAQ
          </h2>
          <p className="text-2xl text-[#6A6B6C] max-sm:mb-4">
            We're here to help! Contact us for support, inquiries, or to share
            your feedback.
          </p>
        </div>
        <div className="md:col-span-8 lg:col-span-6">
          <img
            src="/src/assets/faq.svg"
            alt="image of application dashboard"
            className="h-[200px] md:h-[400px]"
          />
        </div>
      </section>
      <main aria-labelledby="frequently asked questions" className=" my-10">
        <h1 className="text-center text-2xl  md:text-[40px] font-semibold text-[#2A2B4A]">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-[20p] text-secondary">
          Some of the questions you have in mind has been answered below.
        </p>

        <div className="mt-10 max-lg:mx-10 max-md:mx-5">
          {questions.map((question, index) => (
            // <div className= {`border-2 rounded-md py-2 ${isOpen? "border-[#006FCF]" : border-[#6A6B6C]}  `}>
            <div
              className={`mx-auto mb-5 max-w-[950px]  rounded-md border-2 py-2 max-md:px-5 ${isOpen ? "border-[#006FCF]" : "border-[#6A6B6C]"}`}
              onClick={toggleOpen}
            >
              <div key={index} className="flex  justify-between py-5 md:px-10">
                <p className="mb5 text-xl md:text-2xl text-[#2A2B4A]">{question.title}</p>
                <button className="text-[#2A2B4A]">
                  <IoIosArrowUp />
                </button>
              </div>
              {isOpen && (
                <p className="mx-auto my-4 max-w-[860px] text-lg md:text-xl text-secondary max-lg:px-10 max-md:px-5">
                  {question.paragraph}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQ;

const questions = [
  {
    title: "How do i create an account on Veridux?",
    paragraph:
      'To create an account on Veridux, simply click on the "Sign Up" button located at the top right corner of the homepage. Follow the prompts to enter your information and create your account ',
    id: 1,
  },

  {
    title: "Can i pay my bills on Veridux?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 3,
  },

  {
    title: "Do you offer discounts or promotions?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 5,
  },

  {
    title: "Can i track my transaction history on Veridux?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 9,
  },
];
