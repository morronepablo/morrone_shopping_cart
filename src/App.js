import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import { NavBar } from "./components/navBar/navBar";
import { ItemListContainer } from "./pages/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/itemDetailContainer";
import { SlideShow } from './components/slideShow/slideShow'
import { NotFound } from './pages/notFound/notFound'
import { CartProvider } from './context/cartContext'
import { Cart } from "./components/cart/cart";

export const App = () => {
    return (
      <CartProvider>
        <Router>
          <main>
            <NavBar />
              <article>
                <SlideShow />
              </article>
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path="/category/:id">
                <ItemListContainer />
              </Route>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
        </Router>
      </CartProvider>
    )
}

// function App() {
//   return (
//     <main>
//       <NavBar />
//       <ItemListContainer />
//       <ItemCount 
//         product='Remera verano'
//         stock={0} 
//         initial={1}
//         onAdd={() => console.log('onAdd')} 
//       />
//     </main>
//   )
// }
