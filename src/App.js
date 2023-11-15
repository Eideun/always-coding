import React from "react";
import { Route, Routes } from 'react-router-dom';

import "./App.css";
import { ROUTE_ARR } from "./routes/routes";
import { Helmet } from "react-helmet";

function App() {
  return (
      <div className="App">
        <Helmet>
          <title>오늘도 코딩</title>
        </Helmet>
        <Routes>
          {ROUTE_ARR.map((route, index) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={index}
            />
          ))}
        </Routes>
      </div>
  );
}

export default App;