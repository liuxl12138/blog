import React from "react";
import { Suspense } from "react";
import RouterList from "./router/index";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/header";
import './styles/app.scss'

function App() {
  return (
    <Suspense>
      <Header></Header>
      <div className="main">
        <BrowserRouter>
          <RouterList></RouterList>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
