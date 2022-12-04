import { Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Api } from "./components/Api";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
