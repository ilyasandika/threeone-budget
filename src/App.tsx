import Navbar from "./components/Navbar.tsx";
import Header from "./components/Header.tsx";
import Dashboard from "./components/Dashboard.tsx";

function App() {


    return (
        <div className="flex min-h-screen">
            <Navbar></Navbar>
            <div className="w-full">
                <Header></Header>
                <div className="flex-grow bg-sky-950 bg-opacity-5 h-screen">
                    <Dashboard></Dashboard>
                </div>
            </div>
        </div>
    )
}

export default App;
