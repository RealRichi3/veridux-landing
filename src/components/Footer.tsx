import {
    InstagramFilled,
    TwitterCircleFilled,
} from "@ant-design/icons"
import { Divider } from "antd"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="mainFooter">
            <div className="mainFooter_inner">
                <div className="logo">
                    <img src="/Veridux.svg" alt="Veridux Logo" />
                </div>
                <ul>
                    <li>
                        <Link to={"/"}>Copyright</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Privacy Policy</Link>
                    </li>
                </ul>
                <div className="mainFooter_icons">
                    <TwitterCircleFilled onClick={() => window.open('https://x.com/veridux')} style={{ color: "#fff" }} />
                    <InstagramFilled onClick={() => window.open('https://instagram.com/veriduxpay')} style={{ color: "#fff" }} />
                    <InstagramFilled onClick={() => window.open('https://instagram.com/veriduxstores')} style={{ color: "#fff" }} />
                    {/* <GithubFilled style={{ color: "#fff" }} /> */}
                </div>
            </div>
            <Divider style={{ background: "#1E293B", margin: "4rem 0" }} />
            <div className="mainFooter_bottom">
                <p>© Copyright 2023, All Rights Reserved by</p>
                <p>Veridux</p>
            </div>
        </div>
    )
}
