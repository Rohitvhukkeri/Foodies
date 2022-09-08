
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import About from './component/about/About';
import Banner from './component/banner/Banner';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Navbar from './component/navbar/Navbar';
import Sign from './component/sign/Sign';
import Menu from './component/menu/Menu'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <ToastContainer autoClose={5000} position="top-center"/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign' element={<Sign/>} />
      <Route path='/banner' element={<Banner/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
