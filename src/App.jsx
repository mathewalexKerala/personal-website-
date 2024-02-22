import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Home from "./Pages/Home";
import Projects from "./components/Projects/Projects";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Works from "./components/Works/Works";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/work" element={<Works />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
