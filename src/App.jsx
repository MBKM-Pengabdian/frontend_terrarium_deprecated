import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutPage, ContactPage, HomePage, ProjectsPage, ServicePage } from './views'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
