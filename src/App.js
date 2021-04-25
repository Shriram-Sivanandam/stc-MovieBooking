import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Student from "./components/Student";
import Parking from "./components/Parking";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Student} />
          <Route path="/registration" component={Student} />
          <Route path="/parking" component={Parking} />
          <Route path="/tickets" component={Booking} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
