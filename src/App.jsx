import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Footer from './components/Footer'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setVisible(false)
      const t = setTimeout(() => {
        setDisplayLocation(location)
        setVisible(true)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [displayLocation])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}