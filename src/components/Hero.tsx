import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { GoodIcon } from "./GoodIcon";

export const Hero = ({ scrollIntoView, origin }: { scrollIntoView?: () => void, origin: 'home' | 'faq' }) => {
    return (
        <div className="heroSection">
            <div className="heroSection_inner">
                <Row justify={"space-between"}>
                    <Col xs={24} md={16} lg={12}>
                        <h2>Welcome to Your Marketplace Management Hub</h2>
                        <h3>Empowering Sellers for </h3>
                        <h3>Ecommerce Success</h3>
                        <div style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "1rem",
                                }}
                            >
                                <GoodIcon />
                                <span style={{ marginLeft: "15px" }}>
                                    <b>Earn discount on purchases</b>
                                </span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "1rem",
                                }}
                            >
                                <GoodIcon />
                                <span style={{ marginLeft: "15px" }}>
                                    <b>Earn commissions on referrals</b>
                                </span>
                            </div>
                        </div>
                        {/* <p>Grow Your Business, Streamline Operations</p> */}
                        <p>Get notified when we launch</p>
                        {origin === 'home' ? (
                            <div onClick={scrollIntoView} className="btn-primary">
                                Join the waitlist
                            </div>
                        ) : (
                            <Link to="/" className="btn-primary">
                                Join the waitlist
                            </Link>
                        )}
                        {/* <div className="app-stores">
                            <GooglePlayStore />
                            <AppleStore />
                        </div> */}
                    </Col>
                    <Col xs={24} md={8} className="phone1">
                        <img src={"/phone1.svg"} alt="Veridux App" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
