import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Ds from './Components/Ds';
import Contact from './Components/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ds" element={<Ds />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
