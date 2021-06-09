import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
// import NLPage from "./components/NLPage"
// import WIPage from "./components/WIPage"
import GrPage from "./components/pages/GrPage"
// import ICTPage from "./components/ICTPage"
// import BRGRPage from "./components/BRGRPage"
import NL from "./components/books/NL"
import WI from "./components/books/WI"
import BRGR from "./components/books/BRGR"
import ICT from "./components/books/ICT"
import Gr from "./components/books/Gr"
import Books from "./components/Books"
import Proof from "./components/Proof"
import Results from "./components/Results"
import SingleResult from "./components/SingleResult"
import ToDo from "./components/ToDo"
import NavBar from "./components/NavBar";



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path='/' exact/>
      
      {/* <Route component={NLPage} path='/books/nl/:slug' />
      <Route component={WIPage} path='/books/wi/:slug' /> */}
      <Route component={GrPage} path='/books/gr/:slug' />
      {/* <Route component={ICTPage} path='/books/ict/:slug' />
      <Route component={BRGRPage} path='/books/brgr/:slug' /> */}
      <Route component={NL} path='/books/nl' />
      <Route component={WI} path='/books/wi' />
      <Route component={Gr} path='/books/gr' />
      <Route component={ICT} path='/books/ict' />
      <Route component={BRGR} path='/books/brgr' />
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
