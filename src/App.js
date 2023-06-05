import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages';
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='error' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
// <Router>
//   <Navbar />
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/shop" element={<Shop />}>
//       <Route path="/" element={<Products />} />
//       <Route path=":id" element={<SingleProduct />} />
//     </Route>
//     <Route path="/cart" element={<Cart />} />
//     <Route path="/checkout" element={<Checkout />} />
//     <Route path="*" element={<Error />} />
//   </Routes>
//   <Footer />
// </Router>;
// ----------------------------------
//   <Router>
//   <Navbar />
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route path="/about" component={About} />
//     <Route path="/shop" component={Shop}>
//       <Route exact path="/shop" component={Products} />
//       <Route path="/shop/:id" component={SingleProduct} />
//     </Route>
//     <Route path="/cart" component={Cart} />
//     <Route path="/checkout" component={Checkout} />
//     <Route component={Error} />
//   </Switch>
//   <Footer />
// </Router>
