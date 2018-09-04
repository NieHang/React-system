import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import store from "./store";
import Nav from "./pages/nav";
import Header from './common/header';
import Home from './pages/home';

const { Sider } = Layout;

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Route path="/" exact component={Home} /> */}
          <Layout>
            <Sider width='240'>
              <Nav />
            </Sider>
            <Layout>
              <Header/>
              <Route path='/' exact component={Home}></Route>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
