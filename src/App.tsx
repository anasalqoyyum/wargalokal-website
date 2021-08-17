import "./styles/globals.css"
import "./styles/style.css"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import FindDesa from "./pages/findDesa";
import Login from "./auth/login";
import Register from "./auth/register";
import VolunteerDesa from "./pages/VolunteerDesa";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/volunteerdesa">
          <VolunteerDesa />
        </Route>
        <Route exact path="/caridesa">
          <FindDesa />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;