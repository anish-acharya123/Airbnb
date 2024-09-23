import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Maxwidth from "./hoc/Maxwidth";

const EnhanceNav = Maxwidth(Navbar);
const EnhanceHome = Maxwidth(Home);

function App() {
  return (
    <>
      <main>
        <EnhanceNav />
        <EnhanceHome />
      </main>
    </>
  );
}

export default App;
