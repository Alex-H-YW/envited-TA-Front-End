import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import Display from './pages/Display/Display';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={ <CreateEvent/> }/>
          <Route path="/event" element={<Display />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
