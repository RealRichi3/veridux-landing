import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
<<<<<<< HEAD
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
=======
import TermsAndConditions from "./pages/TermsAndContditions";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
>>>>>>> bd1a09ccf7a03481402834847b2af6bf3928d5a3
}

export default App;
