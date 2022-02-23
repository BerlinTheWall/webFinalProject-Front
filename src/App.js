import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import NetflixNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import Movies from "./components/movies";
import NewMovie from "./components/newMovie";
import Movie from "./components/movie";
import UpdateMovie from "./components/update";

function App() {
  return (
    <>
      <NetflixNavbar></NetflixNavbar>
      <main>
        <Switch>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/newMovie" component={NewMovie}></Route>
          <Route path="/movie/:id?" component={Movie}></Route>
          {/* <Route path="/not-found" component={Movies}></Route> */}
          <Route path="/update/:id?" component={UpdateMovie}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
        </Switch>
      </main>
    </>
  );
}

export default App;
