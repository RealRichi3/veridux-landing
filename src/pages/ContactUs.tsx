import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateForm = ({ field, value }: { field: string; value: string }) => {
    setForm((prev: typeof form) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    return (
      form.email.length > 0 && form.name.length > 0 && form.message.length > 0
    );
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return window.alert("Please fill all fields");

    setIsLoading(true);
    try {
      axios
        .post(serverUrl + "/contactreq", {
          ...form,
        })
        .then(() => {
          toast.success("Message sent successfully");
          setForm({ name: "", email: "", message: "" });
        })
        .catch(() => {
          toast.error("Message failed to send");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <section
        aria-labelledby="contact us"
        className="flex flex-col items-center bg-[#EBF3FB] py-10 max-sm:px-5 md:flex-row md:justify-center md:py-20 md:pl-20 "
      >
        <div className="max-w-[500px] ">
          <h2 className="mb-4 text-3xl font-semibold text-black md:text-5xl">
            Get in Touch with Veridux
          </h2>
          <p className="text-2xl text-[#6A6B6C] max-md:mb-4">
            We're here to help! Contact us for support, inquiries, or to share
            your feedback.
          </p>
        </div>
        <div className="">
          <img
            src="/purchase-item.svg"
            alt="image of purchase item"
            className="h-[200px] md:h-[400px]"
          />
        </div>
      </section>
      <form
        className="cursor-pointer  bg-white py-10 text-center"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-5 text-2xl font-medium text-[#2A2B4A] md:text-[40px]">
          Contact Us
        </h2>
        <p className="mb-5 text-[#2A2B4A]">
          Feel free to contact us anytime, we will get back to you as soon as we
          can.
        </p>
        <div className="flex flex-col items-center gap-y-2 align-top text-[#2A2B4A]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Full Name"
            className="placeholder"
            required={true}
            onChange={(e) =>
              updateForm({ field: "name", value: e.target.value })
            }
            value={form.name}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            required={true}
            value={form.email}
            onChange={(e) =>
              updateForm({ field: "email", value: e.target.value })
            }
            className="placeholder"
          />
          <textarea
            name=""
            id=""
            value={form.message}
            required={true}
            onChange={(e) =>
              updateForm({ field: "message", value: e.target.value })
            }
            placeholder="Message"
            className="placeholder h-[240px] resize-none align-text-top"
            style={{ lineHeight: "normal" }}
          />
        </div>
        <button
          type="submit"
          disabled={!validateForm()}
          className="mt-5 w-40 rounded-2xl bg-[#006FCF] py-2 text-white md:w-80"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126840.50584541766!2d3.348852473180864!3d6.551224480698328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9173e61df681%3A0x8a503f3a85dda06e!2sAgege%2C%20Lagos%20102212%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715776210990!5m2!1sen!2sng"
            className="my-10 h-[550px] w-full border-none"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
