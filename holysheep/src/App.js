import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Wiki from './components/Wiki';
function App() {
    return (
        <BrowserRouter basename="/holysheep">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home/" element={<Home />} />
                <Route path="/about/" element={<AboutUs />} />
                <Route path="/wiki/" element={<Wiki />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
