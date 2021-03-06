
// imports
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'

// components
import Company from './components/company/Company';
import CapsuleUnitContainer from './components/capsules/CapsuleUnitContainer';
import CoreUnitContainer from './components/cores/CoreUnitContainer'
import CrewMemberContainer from './components/crewMembers/CrewMemberContainer';
import DragonContainer from './components/dragons/DragonContainer'
import LandingpadContainer from './components/landingpads/LandingpadContainer'
import RoadsterContainer from './components/roadster/RoadsterContainer'




function App() {
  // state
  const [company, setCompany] = useState({});
  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get('https://api.spacexdata.com/v4/company');
      const data = response.data;
      console.log(data);
      // destructuring
      const { ceo, employees, name, valuation, vehicles } = data;
      setCompany({
        student: 'Scott Sherwood',
        ceo: ceo,
        employees: employees,
        name: name,
        valuation,
        vehicles
      });
    }
    fetchCompany();
  }, [])

  return (
    <Router>
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/capsules">Capsules</Link>
        <Link to="/cores">Cores</Link>
        <Link to='/crewMembers'>Crew Members</Link>
        <Link to='/dragons'>Dragon</Link>
        <Link to='/landingpad'>Landingpads</Link>
        <Link to='/roadster'>Roadster</Link>
      </nav>
      <h1>GA Space X</h1>
      <Route exact path="/" render={() => <Company company={company}/>} />
      <Route path="/capsules" component={CapsuleUnitContainer} />
      <Route path="/cores" component={CoreUnitContainer} />
      <Route path='/crewMembers' component={CrewMemberContainer} />
      <Route path='/dragons' component={DragonContainer} />
      <Route path='/landingpad' component={LandingpadContainer} />
      <Route path='/roadster' component={RoadsterContainer} />
    </div>
  </Router>
  );
}




export default App;