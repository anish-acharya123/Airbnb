import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Wrappers";
import "./App.css";

function App() {
  const routes = [{ path: "/", element: <Home /> }];
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
