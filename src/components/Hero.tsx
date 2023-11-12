import { Col, Row } from "antd"
import { Link } from "react-router-dom"
import { GooglePlayStore } from "./GooglePlayStore"
import { AppleStore } from "./AppleStore"

export const Hero = () => {
    return (
        <div className="heroSection">
            <div className="heroSection_inner">
                <Row justify={"space-between"}>
                    <Col xs={24} md={16} lg={12}>
                        <h2>Welcome to Your Marketplace Management Hub</h2>
                        <h3>Empowering Sellers for </h3>
                        <h3>Ecommerce Success</h3>
                        <p>Grow Your Business, Streamline Operations</p>
                        <Link to={"/"} className="btn-primary">
                            Get Started
                        </Link>
                        <div className="app-stores">
                            <GooglePlayStore />
                            <AppleStore />
                        </div>
                    </Col>
                    <Col xs={24} md={8} className="phone1">
                        <img src={"/phone1.svg"} alt="Veridux App" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
