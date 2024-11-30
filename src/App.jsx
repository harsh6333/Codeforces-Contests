import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import Home from "./pages/Home";
import ContestDetailPage from "./pages/ContestDetailPage";
import Header from "./components/Header";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contest/:id" element={<ContestDetailPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
