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
        className="grid grid-cols-1 bg-[#EBF3FB] md:grid-cols-12"
      >
        <div className="md:col-span-4 lg:col-span-6">
          <h2 className="font-semibold text-black">Explore Veridux FAQ</h2>
          <p className="text-[#6A6B6C]">
            We're here to help! Contact us for support, inquiries, or to share
            your feedback.
          </p>
        </div>
        <div className="md:col-span-8 lg:col-span-6">
          <img src="/src/assets/faq.svg" alt="image of application dashboard" />
        </div>
      </section>
      <main aria-labelledby="frequently asked questions">
        <h1 className="font-semibold">Frequently Asked Questions</h1>
        <p>Some of the questions you have in mind has been answered below.</p>

        <div>
          {questions.map((question, index) => (
            // <div className= {`border-2 rounded-md py-2 ${isOpen? "border-[#006FCF]" : border-[#6A6B6C]}  `}>
            <div className={`border-2 rounded-md py-2 ${isOpen ? 'border-[#006FCF]' : 'border-[#6A6B6C]'}`} onClick={toggleOpen}>

              <div key={index} className="flex justify-between">
                <p>{question.title}</p>
                <button>
                  <IoIosArrowUp />
                </button>
              </div>
             {isOpen && <p>{question.paragraph}</p>}
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
    title: "Is it safe to make transactions on Veridux?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 2,
  },
  {
    title: "Can i pay my bills on Veridux?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 3,
  },
  {
    title: "How do i purchase airtime and data on Veridux?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 4,
  },
  {
    title: "Do you offer discounts or promotions?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 5,
  },
  {
    title: "What is your return policy?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 6,
  },
  {
    title: "How do i reset my password?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 7,
  },
  {
    title: "How long does it take for my bill to be processed?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 8,
  },
  {
    title: "Can i track my transaction history on Veridux?",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus omnis architecto, neque dolores adipisci tenetur illum, debitis numquam officiis reprehenderit explicabo veritatis laudantium facilis.",
    id: 9,
  },
];
