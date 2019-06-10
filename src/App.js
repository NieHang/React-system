import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import createHistory from "history/createHashHistory";
import { Layout } from "antd";
import store from "./store";
import Nav from "./pages/nav";
import Header from "./common/header";
import Home from "./pages/home";
import Buttons from "./pages/ui/buttons/loadable";
import Modal from "./pages/ui/modal/loadable";
import Loading from "./pages/ui/loading/loadable";
import Note from "./pages/ui/note/loadable";
import Message from "./pages/ui/message/loadable";
import Tab from "./pages/ui/tab/loadable";
import Gallery from "./pages/ui/gallery/loadable";
import Carousel from "./pages/ui/carousel/loadable";
import LoginForm from "./pages/form/login/loadable";
import Enroll from "./pages/form/enroll/loadable";
import BasicTable from "./pages/table/basic/loadable";
import HighTable from "./pages/table/high/loadable";
import Rich from "./pages/rich/loadable";
import City from "./pages/city/loadable";
import Order from "./pages/order/loadable";
import User from './pages/user/loadable';
import BikeMap from './pages/bikemap/loadable';
import Bar from './pages/charts/bar/loadable';
import Pie from './pages/charts/pie/loadable';
import Line from './pages/charts/line/loadable';
import Permission from './pages/permission/loadable';

const history = createHistory();

const { Sider } = Layout;

class App extends PureComponent {
  render() {
    return <Provider store={store}>
        <Router history={history} basename='/react_system'>
          <Layout>
            <Sider width="240" breakpoint="lg" collapsedWidth="0">
              <Nav />
            </Sider>
            <Layout>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/ui/buttons" exact component={Buttons} />
              <Route path="/ui/modal" exact component={Modal} />
              <Route path="/ui/loading" exact component={Loading} />
              <Route path="/ui/note" exact component={Note} />
              <Route path="/ui/message" exact component={Message} />
              <Route path="/ui/tab" exact component={Tab} />
              <Route path="/ui/gallery" exact component={Gallery} />
              <Route path="/ui/carousel" exact component={Carousel} />
              <Route path="/form/login" exact component={LoginForm} />
              <Route path="/form/enroll" exact component={Enroll} />
              <Route path="/table/basic" exact component={BasicTable} />
              <Route path="/table/high" exact component={HighTable} />
              <Route path="/rich" exact component={Rich} />
              <Route path="/city" exact component={City} />
              <Route path="/order" exact component={Order} />
              <Route path="/user" exact component={User} />
              <Route path="/bikemap" exact component={BikeMap} />
              <Route path="/charts/bar" exact component={Bar} />
              <Route path="/charts/pie" exact component={Pie} />
              <Route path="/charts/line" exact component={Line} />
              <Route path="/permission" exact component={Permission} />
            </Layout>
          </Layout>
        </Router>
      </Provider>;
  }
}

export default App;
