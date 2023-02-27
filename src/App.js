import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/index";
import GamePage from "./page/Game-page";
import Header from "./components/Header";
import OrderPage from "./page/Order-page";
import Cart from "./page/Cart";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </div>
  );
}

export default App;
