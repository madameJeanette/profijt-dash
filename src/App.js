import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page"
import SingleBook from "./components/SingleBook"
import Books from "./components/Books"
import Proof from "./components/Proof"
import Results from "./components/Results"
import SingleResult from "./components/SingleResult"
import ToDo from "./components/ToDo"



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={Home} path='/' exact/>
      
      <Route component={Page} path='/books/singlebook/:slug' />
      <Route component={SingleBook} path='/books/singlebook' />
      <Route component={Books} path='/books' />
     
      <Route component={Proof} path='/proof' />
     
      <Route component={SingleResult} path='/results/:slug' />
      <Route component={Results} path='/results' />
      
     
      <Route component={ToDo} path='/todo' />

    </Switch>
    
    </BrowserRouter>
  )
}

export default App;
