import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import "./index.css";

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <div className='page-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
