import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Technologies/>

    </div>
  );
}

function Header() {
    return (
        <div className="feature">Привет</div>
    );
}

function Technologies() {
    return (
        <div className="feature">Всем</div>
    );
}

export default App;
