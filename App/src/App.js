import RecursiveComponent from "./components/RecursiveComponent";
import { data } from "./components/RecursiveComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <>
    <ToolBar>

    </ToolBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="profile" element={<Portfolio />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
