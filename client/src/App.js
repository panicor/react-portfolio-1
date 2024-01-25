import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Home, Contact, Resume } from './pages'
import { Header, Footer } from './components'


function App() {
  return (
    <div className="App">
    <Header />
     <Switch>
      <Route exact path='/' component={Home} />
      <Route path ='/resume' component={Resume} />
      <Route path ='/contact' component={Contact} />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
