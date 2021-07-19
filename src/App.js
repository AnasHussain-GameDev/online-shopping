import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Pages
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Login" component={Login} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
