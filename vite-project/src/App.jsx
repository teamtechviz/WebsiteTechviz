import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Techviz } from "./pages/Techviz";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Faq } from "./pages/Faq";
import { Navbar } from "./components/Navbar";
import { ErrorPg } from "./pages/ErrorPg";
import { Chat } from "./components/ChatIcon";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techviz" element={<Techviz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<ErrorPg />} />
        </Routes>
        <Chat />
      </BrowserRouter>
  </>
  );
};

export default App;