import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/navbar.component";
import HomeRoute from "./routes/home.route";
import NotFoundRoute from "./routes/404-not-found.route";
import "./styles/app.scss";

function App() {
  return (
    <div>
      <NavbarComponent />
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomeRoute />
            </Route>
            <Route path="*">
              {/* 404 page */}
              <NotFoundRoute />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
