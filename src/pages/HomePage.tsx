const HomePage: React.FC = () => {
    return (
        <div className="bg-[#F9F9F9]">
            <div className="bg-tertiary">
                <section
                    aria-labelledby="app-intro"
                    className="mx-auto  flex max-w-[1600px] flex-col items-center  bg-tertiary px-5 text-center max-sm:py-10 md:px-20  md:pt-28"
                >
                    <div></div>
                    <h2 className="max-w-[700px] text-center text-2xl font-bold text-black md:text-5xl">
                        Experience Excellence with Veridux's Multi-Service Platform
                    </h2>
                    <h4 className="my-3 max-w-[700px] text-center text-sm text-[#FF9900] md:text-[20px]">
                        Welcome to Veridux, where innovation meets versatility. Our platform
                        offers a wide range of services, including marketplace management,
                        flight booking, bill payment, airtime top-up, and more.
                    </h4>
                    <div className="mb-10 flex justify-center gap-10">
                        <a href="">
                            <img
                                src="/google-play.svg"
                                alt="google playstore image"
                            />
                        </a>
                        {/* <a href="">
                <img src="/src/assets/apple-store.png" alt="IOS store image" />
              </a> */}
                    </div>
                    <img src="/app-intro.svg" alt="app-image" />
                </section>
            </div>

            <section
                aria-labelledby="our-partnerships"
                className="flex h-32 flex-col justify-center bg-[#006FCF] md:h-60 md:px-20"
            >
                <div className="mx-auto max-w-[1600px]">
                    <p className="text-center text-xl font-semibold text-white md:text-3xl">
                        Our Partners
                    </p>
                    <div className="flex flex-row md:flex-row md:justify-center gap-10 md:gap-20 mt-5">
                        <img
                            src="/fidelity-bank-logo.png"
                            alt="fidelity bank logo"
                            className="w-[70px] md:h-[94px] md:w-[180px]"
                        />
                        <img
                            src="/paystack-logo.png"
                            alt="paystack logo"
                            className="w-[70px] md:h-[94px] md:w-[180px]"
                        />
                        <img
                            src="/travelstart-2.png"
                            alt="travel start logo"
                            className="w-[70px] md:h-[94px] md:w-[180px]"
                        />
                        {/* <img
                src="/src/assets/sponsorship-busha.png"
                alt="busha-logo"
                className="w-[70px] md:h-[94px] md:w-[180px]"
              /> */}
                    </div>
                </div>
            </section>

            <div className="bg-white">
                <section
                    aria-labelledby="unique-features"
                    className="mx-auto max-w-[1600px] bg-white px-5 py-10 lg:px-20 md:px-10 xl:px-32"
                >
                    <p className="text-center text-3xl font-[500]  text-black">
                        What Sets Us Apart
                    </p>
                    <div className="mt-10 grid grid-cols-1 items-center gap-10 bg-white lg:grid-cols-2">
                        <div className="flex items-center justify-center rounded-xl bg-[#DDEBF8] py-10 px-5">
                            <img src="/top-up.svg" alt="top-up-image" />
                        </div>
                        <div>
                            <h3 className="text-[30px] font-[500] text-black">
                                Seamless Integration
                            </h3>
                            <p className="text-lg font-normal text-secondary">
                                Connecting your needs effortlessly, ensuring you are satisfied
                                and comfortable.
                            </p>
                            <ul className="list-inside list-disc text-[16px] font-normal text-[#FF9900]">
                                <li>Access all services in one place.</li>
                                <li>Enjoy easy navigation and transactions.</li>
                                <li>Switch services seamlessly without disruptions.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <section
                aria-labelledby="services"
                className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 bg-[#F9F9F9] px-5 py-10 md:grid-cols-2 md:px-10 lg:px-20 xl:grid-cols-3 xl:px-32"
            >
                {servicesArray.map((service, index) => (
                    <div key={index} className="pt-5 xl:pt-10 ">
                        <div className="flex h-[400px] justify-center rounded-3xl bg-tertiary pt-10">
                            <img src={service.image} alt={service.alt} height="300px" />
                        </div>
                        <div className="mt-4 md:mt-10 lg:px-10">
                            <h2 className="text-2xl font-normal text-primary">
                                {service.title}
                            </h2>
                            <p className="text-[16px] text-secondary">{service.paragraph}</p>
                            <p className="text-[16px] text-secondary">
                                {service.semi_paragraph ? service.semi_paragraph : ""}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
            <section
                aria-labelledby="reviews"
                className="mx-auto max-w-[1600px] bg-white px-5 py-10 md:px-20 md:py-20 xl:px-32"
            >
                <h3 className="text-center text-2xl font-normal text-[#2A2B4A]">
                    Our Testimonials
                </h3>
                <div className="mt-10 grid grid-cols-1 items-center max-lg:place-items-center gap-10 text-center lg:grid-cols-2">
                    <img
                        src="/testimonial-1.svg"
                        alt="review-image"
                        className="w-[500px] xl:w-[700px]"
                    />
                    <img
                        src="/testimonial-2.svg"
                        alt="review-image"
                        className="w-[500px] xl:w-[700px]"
                    />
                </div>
            </section>
        </div>
    );
};

export default HomePage;

const servicesArray = [
    {
        image: "/airtime-purchase.svg",
        title: "Airtime Purchase",
        alt: "airtime-purchase-image",
        paragraph: "Stay connected wherever you go with Veridux Airtime Purchase.",
        semi_paragraph:
            "Our platform offers a quick and convenient way to top up your phone credit whenever you need it",
    },
    {
        image: "/data purchase.svg",
        title: "Data Subscription",
        paragraph:
            "With easy subscription options and automatic renewals, you can enjoy uninterrupted access to high-speed internet wherever you go. Say goodbye to data caps and overage charges.",
    },
    {
        image: "/cable-tv-subscription.svg",
        title: "Cable TV Subscription",
        paragraph:
            "Enjoy your favorite TV shows and channels with Veridux Cable TV Subscription. With easy sign-up and flexible packages, you can customize your viewing experience to match your interests.",
    },
    {
        image: "/electricity-bills.svg",
        title: "Electricity Bills",
        paragraph:
            "Paying your electricity bill has never been easier thanks to Veridux. Simply enter your account details, select your payment method, and complete the transaction.",
    },
    {
        image: "/marketplace.svg",
        title: "MarketPlace",
        paragraph:
            "Looking for a convenient way to shop for your products? Look no further than Veridux Marketplace. With easy navigation and secure payment options, shopping with us is simple.",
    },
    {
        image: "/flight-booking.svg",
        title: "Flight Booking",
        paragraph:
            "Planning your next trip? With Veridux, booking your flights is a breeze. Our user-friendly platform allows you to easily search for and book flights to your desired destinations.",
    },
];