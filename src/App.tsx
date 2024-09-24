import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Maxwidth from "./hoc/Maxwidth";

const EnhanceNav = Maxwidth(Navbar);
const EnhanceHome = Maxwidth(Home);

function App() {
  return (
    <>
      <main className="h-[200vh] ">
        <EnhanceNav />
        <EnhanceHome />
      </main>
    </>
  );
}

export default App;
