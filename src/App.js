import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


function Tombol(props){
  function handleClick(){ 
      alert(`Anda telah mengklik tombol ${props.teks}.`);
  }
  return <button onClick={handleClick}>{props.teks}</button>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <>
          <div>
              <Tombol teks ="Pertama" />
              <Tombol teks ="Kedua" />
              <Tombol teks = "Ketiga" />
          </div>
          
      </>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
