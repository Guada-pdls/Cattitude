import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Routes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Routes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Routes/Cart/Cart";
import About from "./Routes/About/About";
import Faq from "./Routes/Faq/Faq";
import NotFound from "./Routes/NotFound/NotFound";
import Checkout from "./Routes/Checkout/Checkout";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/:categoryId' element={ <ItemListContainer/>}/>
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path='/checkout' element={<Checkout item={true}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/faqs" element={<Faq/>}/>

            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <Footer/>
    </>
  )
}

export default App
