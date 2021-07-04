import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import { ItemListContainer } from "./pages/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/itemDetailContainer";
import { SlideShow } from './components/slideShow/slideShow'
import { NotFound } from './pages/notFound/notFound'
import './App.css'
import styled from 'styled-components'

export const App = () => {
    return (
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Router>
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
