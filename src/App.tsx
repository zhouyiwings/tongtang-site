import {Route, Router, Switch} from "react-router-dom";
import './App.scss';
import { createBrowserHistory } from 'history';

import Header from "./components/Header";
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import AboutUs from "./pages/AboutUs";
import Join from "./pages/Join";
import { ABOUT_US, CASES, HOME, JOIN } from "./constants/urls";
import { createTheme, ThemeProvider } from "@mui/material";

const history = createBrowserHistory();

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4713",
      light: "#FF7005",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path={HOME} component={Home} exact />
          <Route path={CASES} component={Cases} exact />
          <Route path={ABOUT_US} component={AboutUs} exact />
          <Route path={JOIN} component={Join} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
