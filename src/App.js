import { useState } from 'react';
import './App.css';

import SideMenu from './components/SideMenu';
// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';


const Home = () => {
  return <h1>"Tampan Dan Berani"</h1>;
};


function App() {
  const [inactive, setInactive] = useState(false);

  return (
  <div className="App">
    <Router>
      <SideMenu 
      onCollapse={(inactive) => {
        console.log(inactive);
        setInactive(inactive);
      }} 
      />
      <div className={`container ${inactive ? "inactive" : "" }`}>
      
      
      <Switch>
        <Route exact path={'/'}>
          <Home/>
        </Route>
        <Route exact path={'/Dashboard'}>
          <Dashboard/>
        </Route>
        <Route path={'/Users'}>
          <Users/>
        </Route>
      </Switch>
      </div>

    </Router>
  </div>
  )
}

export default App;
