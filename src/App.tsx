import Navbar from "./components/Navbar/Navbar.tsx";
import Header from "./components/Header/Header.tsx";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";

function App() {
    return (
        <Router>
            <div className="flex min-h-screen">
                <Navbar />
                <div className="w-full ml-72">
                    <Header />
                    <div className="flex-grow bg-sky-950 bg-opacity-5 h-screen">
                        <AppRoutes />
                    </div>
                </div>
            </div>
        </Router>
    );
}


export default App;
