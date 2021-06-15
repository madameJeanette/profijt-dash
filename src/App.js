import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost"
import Gr from "./components/Gr"
import Books from "./components/Books"
import Proof from "./components/Proof"
import Results from "./components/Results"
import SingleResult from "./components/SingleResult"
import ToDo from "./components/ToDo"
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={SinglePost} path='/post/:slug' />
      <Route component={Gr} path='/books/gr' />

      <Route component={Books} path='/books' />
     
      <Route component={Proof} path='/proof' />
     
      <Route component={SingleResult} path='/results/:slug' />
      <Route component={Results} path='/results' />
      <Route component={Projects} path='/projects' />
      
     
      <Route component={ToDo} path='/todo' />

    </Switch>
    
    </BrowserRouter>
  )
}

export default App;
