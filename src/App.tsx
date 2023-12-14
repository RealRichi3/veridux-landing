import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FAQs } from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import { PLAYSTORE_URL } from "./constants";

const AppStore = () => {
    window.location = PLAYSTORE_URL as string & Location;

    return <>{ }</>;
};

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/android" element={<AppStore />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
