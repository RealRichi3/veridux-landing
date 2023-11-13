/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Col, Row } from "antd"
import { GoodIcon } from "../components/GoodIcon"
import { QouteIcon } from "../components/QouteIcon"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { useRef } from "react"


export const Home = () => {
    const ref = useRef<HTMLDivElement>(null)

    const scrollToRef = () => {
        console.log('clicked')
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="landingPage">
            <Header scrollIntoView={scrollToRef} />
            <div className="container">
                <Hero scrollIntoView={scrollToRef} origin={'home'} />
                <div className="why-choose-us">
                    <h2>Why choose our</h2>
                    <h2>platform?</h2>
                    <Row gutter={[32, 32]} style={{ margin: "35px" }}>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item" onClick={scrollToRef}>
                                <GoodIcon />
                                <span>
                                    <b>Vendors:</b> Effortless Product Management
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>For Users:</b> Access huge catalogue of products
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>Vendors:</b> Reach a wider Audience
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>For Users:</b> Get discounts of purchases
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>Vendors:</b> Secure Payment Handling
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="vendor-admin-item">
                                <GoodIcon />
                                <span>
                                    <b>For Users:</b> Earn bonuses on referrals
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="what-they-say">
                    <h2>What They say About</h2>
                    <h2>Veridux</h2>
                    <div className="what-they-say_inner">
                        <Row justify={"space-between"} align={"middle"}>
                            <Col xs={24} md={12}>
                                <img src={"/girl.png"} alt="Girl" />
                            </Col>
                            <Col xs={24} md={10}>
                                <QouteIcon />
                                <div style={{ marginTop: "30px" }}>
                                    <p>"We love Veridux! Our</p>
                                    <p>designers were using it for their</p>
                                    <p>projects, so clients already knew</p>
                                    <p>what Landingfolio was and how</p>
                                    <p>to use it."</p>
                                </div>
                                <div className="reviewer">
                                    <small>
                                        <b>Jenny Wilson</b>
                                    </small>
                                    {/* <small style={{ color: "#52525B" }}>Co-Founder of</small>
                                    <TrackerCompanyIcon /> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="what-are-you-waiting-for" ref={ref}>
                    <Row align={"middle"}>
                        <Col xs={24} md={12}>
                            <h2>What are you waiting for</h2>
                            <h2 >Join the waitlist</h2>
                            <div style={{ margin: "13px 0" }}>
                                <div>
                                    <p>Clarity gives you the blocks & components you need to</p>
                                    <p>
                                        create a truly professional website, landing page or admin
                                    </p>
                                    <p>panel for your SaaS and gives the blocks.</p>
                                </div>
                            </div>
                            <div style={{ marginTop: "2.5rem" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <GoodIcon />
                                    <span style={{ marginLeft: "15px" }}>
                                        <b>Start Selling Today</b>
                                    </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <GoodIcon />
                                    <span style={{ marginLeft: "15px" }}>
                                        <b>Bacome a Vendor</b>
                                    </span>
                                </div>
                            </div>
                            <div ref={ref}>
                                <Link
                                    to="/"
                                    className="btn-primary"
                                    style={{
                                        borderRadius: "47px",
                                        fontSize: "16px",
                                        marginTop: "50px",
                                    }}
                                >
                                    Join now
                                </Link>
                            </div>
                        </Col>
                        <Col xs={24} md={12} className="phone2">
                            <img src="/phone2.svg" alt="Veridux Mobile App" />
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}
