import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import OrderConfirmed from "./pages/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/order-confirmed" element={<OrderConfirmed />}></Route>
      </Route>
    </Routes>
  );
}
