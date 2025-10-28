import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import ModernParticleBackground from './components/ui/ParticleBackground'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark">
        <ModernParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
 
        </Routes>
      </div>
    </Router>
  )
}

export default App