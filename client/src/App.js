import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import MoviesList from "./components/movies-list.component";
// import SearchMovie from "./components/search.component";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <br />
        <Route exact path="/" component={MoviesList} />
        {/* <Route path="/search" component={SearchMovie} /> */}
      </div>
    </Router>
  );
}

export default App;
