const ContactUs: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
    };
  return (
    <div>
      <section
        aria-labelledby="contact us"
        className="flex flex-col md:flex-row items-center justify-center bg-[#EBF3FB] md:py-20 md:pl-20 py-10 max-sm:px-5"
      >
        <div className="l max-w-[500px] ">
          <h2 className="mb-4 text-3xl md:text-5xl font-semibold text-black">
            Get in Touch with Veridux
          </h2>
          <p className="text-2xl text-[#6A6B6C] max-sm:mb-4">
            We're here to help! Contact us for support, inquiries, or to share
            your feedback.
          </p>
        </div>
        <div className="">
          <img
            src="/src/assets/purchase-item.png"
            alt="image of purchase item"
            className="h-[400px]"
          />
        </div>
      </section>
      <form
        className="cursor-pointer  bg-white text-center py-10"
        onSubmit={handleSubmit}
      >
        <h2 className="md:text-[40px] text-2xl font-medium text-[#2A2B4A]">Contact Us</h2>
        <p className="text-[#2A2B4A] mb-5">
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
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            className="placeholder"
          />
          <textarea
            // type="text"
            name=""
            id=""
            placeholder="Message"
            className="placeholder h-[240px] align-text-top resize-none"
            style={{ lineHeight: "normal" }}
          />
        </div>
        <button type="submit" className="bg-[#006FCF] w-40 md:w-80 py-2 rounded-2xl text-white mt-5">
          submit
        </button>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126840.50584541766!2d3.348852473180864!3d6.551224480698328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9173e61df681%3A0x8a503f3a85dda06e!2sAgege%2C%20Lagos%20102212%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715776210990!5m2!1sen!2sng"
            // width="600"
            // height="450"
            // style="border:0;"
            className="w-full border-none my-10 h-[550px]"
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
