import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<div className="min-h-screen flex items-center justify-center bg-dark text-white text-2xl">Admin Dashboard — Coming Soon</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
