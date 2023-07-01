import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import List from './pages/List';
import Login from './pages/Login';
import CancellationPolicy from './pages/CancellationPolicy';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
