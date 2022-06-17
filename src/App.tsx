import React from "react";
import { Suspense } from "react";
import RouterList from "./router/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <RouterList></RouterList>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
