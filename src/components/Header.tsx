import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Drawer } from "antd"

export const Header = ({ scrollIntoView }: { scrollIntoView: () => void }) => {
    const [showDrawer, setShowDrawer] = useState(false)
    return (
        <div className="mainHeader">
            <div className="logo">
                <img src="/Veridux.svg" alt="Veridux Logo" />
            </div>
            <ul className="show-desktop navbar">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                {/* <li>
          <Link to={""}>Blog</Link>
        </li> */}
                <li>
                    <Link to={"/faqs"}>FAQ</Link>
                </li>
            </ul>

            <div className="mainHeader_btns show-desktop" onClick={scrollIntoView}>
                <Link to={"/"} className="btn-primary">
                    Join the waitlist
                </Link>
                {/* <Link to={"/"} className="btn-primary">
                    Login
                </Link> */}
            </div>

            <div className="show-mobile">
                {showDrawer ? (
                    <MenuFoldOutlined onClick={() => setShowDrawer(false)} />
                ) : (
                    <MenuUnfoldOutlined onClick={() => setShowDrawer(true)} />
                )}
            </div>
            <Drawer
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
                placement="left"
            >
                <div className="logo" style={{ marginBottom: "2rem" }}>
                    <img src="/Veridux.svg" alt="Veridux Logo" />
                </div>
                <div>
                    <Link
                        to={"/"}
                        style={{
                            color: "#000",
                            fontSize: "1.2rem",
                            marginBottom: "1rem",
                            display: "block",
                        }}
                    >
                        Home
                    </Link>
                </div>
                <div>
                    <Link
                        to={"/"}
                        style={{
                            color: "#000",
                            fontSize: "1.2rem",
                            marginBottom: "1rem",
                            display: "block",
                        }}
                    >
                        Blog
                    </Link>
                </div>
                <Link
                    to={"/faqs"}
                    style={{
                        color: "#000",
                        fontSize: "1.2rem",
                        marginBottom: "1rem",
                        display: "block",
                    }}
                >
                    FAQ
                </Link>
                <div className="mainHeader_btns" style={{ marginTop: "2rem" }}>
                    <Link to={"/"} className="btn-secondary">
                        Join
                    </Link>
                    <Link to={"/"} className="btn-primary">
                        Login
                    </Link>
                </div>
            </Drawer>
        </div>
    )
}
