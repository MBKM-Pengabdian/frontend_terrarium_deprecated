import { Route, Routes } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage, ProjectsPage, ServicePage, ProductPage, EventPage, DetailEvent, Dashboard } from './pages'
import { NavbarComponent, FooterComponent } from './components'

function App() {

  const excludedPaths = ['/dashboard'];

  const showNavbarAndFooter = () => {
    return !excludedPaths.includes(window.location.pathname);
  };

  return (
    <>
      {showNavbarAndFooter() && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/detail-event/:id" element={<DetailEvent />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {showNavbarAndFooter() && <FooterComponent />}
    </>
  )
}

export default App
