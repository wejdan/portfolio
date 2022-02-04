import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProject from "./pages/SingleProject";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import "./App.css";
import React from "react";
function App() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const OpenSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <BrowserRouter>
      <Navbar OpenSidebar={OpenSidebar} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        OpenSidebar={OpenSidebar}
      />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/project/:id" element={<SingleProject />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
