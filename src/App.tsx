import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Static } from "./screens/Static";
import ContactUs from "./screens/ContactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Static />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
