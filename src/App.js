import { Provider } from "react-redux";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store.js";
import { Routes, Route } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults"; // ✅ ADDED

const App = () => {
  return (
    <Provider store={store}>
      <Header />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/results" element={<SearchResults />} /> {/* ✅ ADDED */}
      </Routes>
    </Provider>
  );
};

export default App;

    


