import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import styled from "styled-components";
import './App.css'
import Home from './components/Home/Home.jsx';
import Gallery from './components/Gallery/Gallery.jsx'

function App() {

    const StyledLink =  styled(NavLink)`
    color: white;
    padding-right: 5px;
    & .active {
        font-weight: bold;
        color : grey;
    }`;

  return (
    <>
        <BrowserRouter>
            <nav>
                <StyledLink to={"/"}>Home</StyledLink>
                <StyledLink to={"/gallery"}>Gallery</StyledLink>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />} >Home</Route>
                <Route exact parh="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
