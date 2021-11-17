import './App.css';
import Home from './components/Home/Home'
import {useState} from 'react'
import Signup from './components/signup/Signup';

function App() {

  const [token , setToken] = useState("")

  return (
    <div className="App">
        {
          token ? <Home /> : <Signup token={token} />
        }
    </div>
  );
}

export default App;
