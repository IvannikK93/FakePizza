import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import "./scss/App.scss";
import { MainPage } from "./components/Pages/MainPage";
import { FullPizza } from "./components/Pages/FullPizza/FullPizza";
import { NotFound } from "./components/Pages/NotFound/NotFound";
import Cart from "./components/Pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="FakePizza" element={<MainPage />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
