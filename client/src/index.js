import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";
import Home from "./pages/Home";
import Facts from "./pages/Facts";
import FactForm from "./pages/FactForm";
import FactShow from "./pages/FactShow";
import Things from "./pages/Things";

const NotFound = () => {
  return <p>path not found</p>;
};

ReactDOM.render(
  <BrowserRouter>
    <DataProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/things" element={<Things />} />
          <Route path="/facts/new" element={<FactForm />} />
          <Route path="/facts/:id" element={<FactShow />} />
          <Route path="/facts/:id/edit" element={<FactForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </DataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
