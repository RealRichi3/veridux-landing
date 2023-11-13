import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../constants";

interface IFaq {
    _id: string;
    question: string;
    answer: string;
}
export const FAQs = () => {
    const [faqs, setFaqs] = useState([] as IFaq[]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (faqs.length > 0) return;
        axios.get(`${SERVER_URL}/faq`).then((res) => {
            const responseData = res.data.data;
            console.log(responseData);
            setFaqs(responseData.faqs);
        });
    }, []);
    const scrollToRef = () => {
        console.log("clicked");
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const items: CollapseProps["items"] = faqs.map((faq) => {
        return {
            key: faq._id,
            label: (
                <div>
                    {" "}
                    <b> {faq.question} </b>{" "}
                </div>
            ),
            children: <p> {faq.answer}</p>,
        };
    });

    return (
        <div className="faqs">
            <Header scrollIntoView={scrollToRef} />
            <div className="container">
                <Hero scrollIntoView={scrollToRef} origin={'faq'} />

                <div className="faqs_inner">
                    <h2>Frequently asked questions</h2>
                    <p className="tagline">
                        Everything you need to know about the product and billing.
                    </p>
                    <Collapse
                        defaultActiveKey={["1"]}
                        ghost
                        items={items}
                        expandIcon={({ isActive }) =>
                            isActive ? <CollapseIcon /> : <ExpandIcon />
                        }
                        style={{ margin: "3rem 0" }}
                    />
                </div>
                <div
                    style={{ background: "#fff", margin: "2rem", paddingBottom: "2rem" }}
                >
                    <div className="avatar-group">
                        <div>
                            <img src="/Avatar group.png" />
                        </div>
                        <p style={{ marginTop: "26px" }}>
                            <strong>Still have questions?</strong>
                        </p>
                        <p className="tagline">
                            Everything you need to know about the product and billing.
                        </p>
                        <Link to={"/"} className="btn-primary">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export const CollapseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
        >
            <path
                d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                stroke="#006FCF"
                stroke-width="2"
                strokeLinecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const ExpandIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#006FCF"
            stroke-width="2"
            strokeLinecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
