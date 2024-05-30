import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import NotFound from './pages/NotFound/NotFound';
//bootstrap style
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
