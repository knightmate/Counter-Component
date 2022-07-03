import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
    <Counter duration={1000*60}/> 
    </div>
  );
}

export default App;
