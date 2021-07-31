import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import store from "./store";
//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
//Pages
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Signup";
import ContactUs from "./Pages/ContactUs";
import Feedback from "./Pages/Feedback";
import CustomerPage from "./Pages/CustomerPage";
import Cart from "./Pages/cart";
import NotFound from "./Pages/NotFound";

toast.configure();
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Feedback" component={Feedback} />
        <Route path="/Customer" component={CustomerPage} />
        <Route path="/Cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
