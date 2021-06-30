import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import { ItemListContainer } from "./pages/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/itemDetailContainer";


export const App = () => {
    return (
      <Router>
        <main>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
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
