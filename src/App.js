import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
