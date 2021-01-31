import './App.css';
import { Switch, Route } from "react-router-dom";
import ApplyManager from "./components/apply-manager";
import Success from "./components/success";
function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/"><p>Welcome Home</p></Route>
            <Route exact path="/applies"><ApplyManager></ApplyManager></Route>
            <Route exact path="/success"><Success></Success></Route>

            <Route path="/:id">
                <p>This text will render for any route other than those defined above</p>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
