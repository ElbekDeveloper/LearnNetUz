import './App.css';
import Home from "./pages/home/home_page";
import Footer from "./components/footers/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PartOne from "./pages/part_one/PartOne";

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/PartOne" element={<PartOne />} />  {/* Это маршрут для partOne */}
                    </Routes>
                </header>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
