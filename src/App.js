import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/homepage/homepage';
import Card from './components/card.component/card.component';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <Route path="/cards" component={Card}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
