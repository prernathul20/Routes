
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/about/:id" element={<About/>} />
    </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
