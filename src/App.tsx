import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { FAQs } from "./pages/FAQs"
import PrivacyPolicy  from "./pages/PrivacyPolicy"
import Terms from "./pages/Terms"

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
