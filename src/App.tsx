import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Wrappers";
import "./App.css";
import { routes } from "./constants/Routes";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
