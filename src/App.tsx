import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FAQs } from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const AppStore = () => {
  window.location =
    "https://play.google.com/store/apps/details?id=com.momastores.app.momastores" as string &
      Location;

  return <>{}</>;
};

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/android" element={<AppStore />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router> */}
      <div className="bg-blue-500 text-pink-700 ">
        this is a boy
      </div>
    </>
  );
}

export default App;
