import './App.css';
import Navbar from './componets/Navbar';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Category from './pages/Category';
import CreateGame from './pages/CreateGame';
import History from './pages/History';
import Leaderboard from './pages/Leaderboard';
import Help from './pages/Help';


function App() {
  return (
    <>

      <Router>

        <Navbar/>
        <switch>
          <Route path='/' exact component={Category} />
          <Route path='/CreateGame' component={CreateGame} />
          <Route path='/History' component={History} />
          <Route path='/Leaderboard' component={Leaderboard} />
          <Route path='/Help' component={Help} />
        </switch>

      </Router>
       
    </>
   
  );
  
}

export default App;
