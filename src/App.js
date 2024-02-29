import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <p className="attribute">
          Code by{" "}
          <a
            href="https://github.com/hannahvw/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Hannah Van Wyk
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
