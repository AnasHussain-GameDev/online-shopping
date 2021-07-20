import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Pages
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Signup";
import ContactUs from "./Pages/ContactUs";
import Feedback from "./Pages/Feedback";
import CustomerPage from "./Pages/CustomerPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Feedback" component={Feedback} />
        <Route path="/Customer" component={CustomerPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
