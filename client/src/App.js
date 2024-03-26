import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Home, Contact, Resume } from './pages'
import { Header, Footer } from './components'


function App() {
  return (
    <div className="App">
    <Header />
     <Switch>
      <Route className="content" exact path='/' component={Home} />
      <Route className="content" path ='/resume' component={Resume} />
      <Route className="content" path ='/contact' component={Contact} />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
