import { Link } from "react-router-dom";

export const Waitlist = ({ scrollIntoView }: { scrollIntoView?: () => {} }) => {
  function dummy() {}
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
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.momastores.app.momastores",
              )
            }
            style={{ height: "100px", width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};
