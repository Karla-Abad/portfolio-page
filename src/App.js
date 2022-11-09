import "./App.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Video from "./components/video";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
