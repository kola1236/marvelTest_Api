import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import { Header } from './components/Header';
 import { Footer } from './components/Footer'
 import {Home} from './pages/Home';
 import {Contact} from './pages/Contact';
 import {NotFound} from './pages/NotFound';


function App() {
  return <>
      <Router>
             <Header />
             <main className="container">
                 
                     <Switch>
                    <Route exact path="/"> 
                        <Home />
                    </Route>
                    <Route path="/contacts" component={Contact}/>
                    <Route component={NotFound}/>
                    </Switch>
                 
             </main>
             <Footer />
     </Router>
     </>;
}

export default App;
