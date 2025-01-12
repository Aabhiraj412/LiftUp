import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import TrackSkills from './pages/TrackSkills.jsx'
import Community from './pages/Community.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/TrackSkills" element={<TrackSkills />} />
      <Route path="/Communities" element={<Community />} />
    </Routes>
  )
}

export default App;
