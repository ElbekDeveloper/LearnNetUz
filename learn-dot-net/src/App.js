import logo from './logo2.svg';
import './App.css';
import Home from "./pages/home_page";

function App() {
  return (
    <div className="App">
        
      <header className="App-header">
          <Home/>
          
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
