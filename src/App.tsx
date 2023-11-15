import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { FAQs } from "./pages/FAQs"
import { Privacy } from "./pages/Privacy"

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Privacy />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
