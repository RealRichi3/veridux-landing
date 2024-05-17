import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
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
}

export default App;
