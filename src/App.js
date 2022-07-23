import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./Components/Header";
import AvengersSite from "./Components/AvengersSite";
import './App.css';
import LeftComponent from "./Components/LeftComponent";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<AvengersSite/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
