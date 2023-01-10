import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { PageProduct } from "./pages/Product";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<PageProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}