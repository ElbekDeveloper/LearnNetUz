import logo from './logo2.svg';
import './App.css';
import Home from "./pages/home/home_page";
import Footer from "./components/footers/footer";

function App() {
  return (
    <div className="App">
        
      <header className="App-header">
          <Home/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://learn.net.uz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn .NET
        </a>
      </header>
        <header></header>
        <Footer/>
    </div>
  );
}

export default App;
