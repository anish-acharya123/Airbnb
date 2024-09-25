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
        <main className="  flex  flex-col ">
          <div className="fixed w-full top-0 z-50 text-center">
            <EnhanceNav />
            <hr className="" />
          </div>

          <div className="flex-1">
            <Routes>
              <Route path="/:tab?" element={<EnhanceHome />} />
            </Routes>
          </div>

          <div className="w-full bg-[#eeeded] ">
            <EnhanceFooter />
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
