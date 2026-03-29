import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Respuestas from "./pages/Respuestas";
import Mentefacto from "./pages/Mentefacto";
import PageWrapper from "./components/PageWrapper";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/respuestas"
          element={
            <PageWrapper>
              <Respuestas />
            </PageWrapper>
          }
        />
        <Route
          path="/mentefacto"
          element={
            <PageWrapper>
              <Mentefacto />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
