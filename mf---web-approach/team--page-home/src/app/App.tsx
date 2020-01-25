import React from 'react';
import {
  Switch,
  Route,
	HashRouter
} from "react-router-dom";
import './App.css';
import Home from './views/home/Home';
import Gender from './utils/Gender';

const App: React.FC = () => {
  return (
    <div className="App">
			<HashRouter>
				<Switch>
					<Route path="/men" component={() => <Home gender={Gender.MEN} />} />
					<Route path="/woman" component={() => <Home gender={Gender.WOMAN} />}  />				
					<Route path="/" component={() => <Home gender={Gender.ALL} />}  />
				</Switch>
			</HashRouter>
    </div>
  );
}

export default App;
