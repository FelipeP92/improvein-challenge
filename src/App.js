
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./components/Login";
//import ListBand from "./components/ListBand";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BandList from './components/BandList';
import Albums from './components/Albums';




function App() {
  return (
    <Router >
      <Navbar/>
      <Route path = '/' exact component = {Login}/>
      <Route path = '/bands' component = {BandList}/>
      <Route path = '/albums' component = {Albums}/>
    </Router>
    
  );
}

export default App;
