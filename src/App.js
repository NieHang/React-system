import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { Layout } from "antd";
import store from "./store";
import Nav from "./pages/nav";
import Header from "./common/header";
import Home from "./pages/home";
import Buttons from "./pages/ui/buttons/loadable";
import Modal from "./pages/ui/modal/loadable";
import Loading from './pages/ui/loading/loadable';

const history = createHistory();

const { Sider } = Layout;

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Layout>
            <Sider width="240">
              <Nav />
            </Sider>
            <Layout>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/ui/buttons" exact component={Buttons} />
              <Route path="/ui/modal" exact component={Modal} />
              <Route path='/ui/loading' exact component={Loading}/>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
