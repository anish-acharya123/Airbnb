import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Maxwidth from "./hoc/Maxwidth";
import Footer from "./components/Footer/Footer";

const EnhanceNav = Maxwidth(Navbar);
const EnhanceHome = Maxwidth(Home);
const EnhanceFooter = Maxwidth(Footer);

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="  ">
          <div className="fixed w-full top-0 z-50">
            <EnhanceNav />
            <hr className="" />
          </div>

          <Routes>
            <Route path="/:tab?" element={<EnhanceHome />} />
          </Routes>

          <div className="absolute bottom-0 w-full bg-gray-100">
            <EnhanceFooter />
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
