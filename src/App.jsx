import { Route, Routes } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage, ProjectsPage, ServicePage, ProductPage } from './views'
import { NavbarComponent, TopbarComponent, FooterComponent, CopyrightComponent } from './components'

function App() {

  return (
    <>
      <TopbarComponent />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterComponent />
      <CopyrightComponent />
    </>
  )
}

export default App
