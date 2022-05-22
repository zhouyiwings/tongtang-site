import {Route, Router, Switch} from "react-router-dom";
import './App.scss';
import { createBrowserHistory } from 'history';
import {Provider} from "react-redux";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import AboutUs from "./pages/AboutUs";
import Join from "./pages/Join";
import { ABOUT_US, CASES, HOME, JOIN } from "./constants/urls";
import { createTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useState } from "react";
import GlobalImageLoader from "./components/GlobalImageLoader";
import store from "./redux/store";

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
  const [loadedAllImages, setLoadedAllImages] = useState(false);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {!loadedAllImages && <GlobalImageLoader onLoadedAllImages={() => setLoadedAllImages(true)} />}
        {!!loadedAllImages && <Router history={history}>
          <Header />
          <ScrollToTop />
          <Switch>
            <Route path={HOME} component={Home} exact />
            <Route path={CASES} component={Cases} exact />
            <Route path={ABOUT_US} component={AboutUs} exact />
            <Route path={JOIN} component={Join} exact />
          </Switch>
          <ScrollToTopButton />
        </Router>}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
