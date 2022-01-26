import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login/Login"
import NotFound from './components/NotFound/NotFound'
import Translation from "./components/Translation/Translation"
import Startup from './components/Startup/Startup';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Sign language translator</h1>

      <Routes>
        <Route path="/" exact element={ <Login/> } />
        <Route path="/startup" exact element={ <Startup/> } />
        <Route path="/translation" element={ <Translation/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
