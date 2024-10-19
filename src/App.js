import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Pesticide from './components/Pesticide';
import Home from './components/Home';
import Header from './components/Header';
import Seed from './components/Seed';
import Plant from './components/Plant';
import Calculation from './components/Calculation';

function App() {
  return (
    <>
      <Router>
    <Header />
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/seeds" element={<Seed />} />
            <Route path="/plant" element={<Plant />} />
            <Route path="/pesticide" element={<Pesticide />} />
            <Route path="/calculation" element={<Calculation />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
