import "./style/main.css"
import Router from "./components/router"
import UserDashboard from "./components/CalendarComp"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from "../src/test"
import Sample from "./temp/sample"

function App({Component}) {
  return (
      <div class="bg-adv-color">
        <Router />
      </div>
  );
}

export default App;
