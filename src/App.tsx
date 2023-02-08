import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/navbar.component";
import HomeRoute from "./routes/home.route";
import NotFoundRoute from "./routes/404-not-found.route";
import "./styles/app.scss";
import MYP1Route from "./routes/myp1.route";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient: QueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavbarComponent />
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <HomeRoute />
              </Route>
              <Route path="/myp1">
                <MYP1Route />
              </Route>
              <Route path="*">
                {/* 404 page */}
                <NotFoundRoute />
              </Route>
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
