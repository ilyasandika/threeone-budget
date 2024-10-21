import Navbar from "./components/Navbar/Navbar.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import { useState } from "react";

function App() {
    const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

    const openNavbar = (value: boolean) => {
        setNavbarOpen(value);
    };

    return (
        <Router>
            <div className="flex min-h-screen text-dark">
                <Navbar isOpen={isNavbarOpen} openNavbar={openNavbar} />
                <div className="w-full xl:ml-72">
                    <Header openNavbar={openNavbar} />
                    <div className="flex-grow bg-sky-950 bg-opacity-5 h-fit p-10">
                        <AppRoutes />
                        <Footer/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
