import logo from './logo.svg';
import './App.css';
import HomePageComponent from "./Components/HomePageComponent/HomePageComponent";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="app_color">

      <Routes>
          <Route path="/" element={<HomePageComponent/>} />
        <Route path="/home" element={<HomePageComponent/>} />
      </Routes>

    </div>
  );
}

export default App;
