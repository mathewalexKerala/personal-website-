import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Home from "./Pages/Home";
import Projects from "./components/Projects/Projects";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
