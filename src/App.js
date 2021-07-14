import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
//Pages
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Shop from "./Pages/Shop";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Shop" component={Shop} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
