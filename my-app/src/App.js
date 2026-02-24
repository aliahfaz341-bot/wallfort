import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs1 from "./Component/ContactUs-1";
import Project1 from "./Component/Project-1";
import About1 from "./Component/About-1";
import Navbar from "./Component/Navbar";
import Footer from "./footer";
import ProjectResedential from "./Component/Project Resedential";
import Page2 from "./Component/Page2";
export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page2 />} />
        <Route path="about" element={<About1 />} />
        <Route path="Project" element={<ProjectResedential />} />
        <Route path="contact" element={<ContactUs1 />} />
        <Route path="Project1" element={<Project1 />} />
        <Route path="projectResedential" element={<ProjectResedential />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}
