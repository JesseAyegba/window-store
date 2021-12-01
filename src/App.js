import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/store" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}
