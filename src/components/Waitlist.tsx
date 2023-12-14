import { Link } from "react-router-dom";
import { PLAYSTORE_URL } from "../constants";

export const Waitlist = ({ scrollIntoView }: { scrollIntoView?: () => void }) => {
    function dummy() { }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <div onClick={scrollIntoView ?? dummy}>
                    <Link to="/" className="btn-primary" style={{ maxHeight: 60 }}>
                        Join the waitlist
                    </Link>
                </div>
                <div
                    style={{
                        maxHeight: "100px",

                        padding: "auto",
                    }}
                >
                    <img
                        src="playstore.png"
                        onClick={() => window.open(PLAYSTORE_URL)}
                        style={{ height: "100px", width: "100%" }}
                    />
                </div>
            </div>
        </>
    );
};
