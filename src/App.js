
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <div> 
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      </Routes>  
     </div>
    </Router>
    </>
  )
}

export default App;
