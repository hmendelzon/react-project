import './App.css';
import Products from './components/products';
import Menu from './components/menu';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about';
import History from './components/history';
import StateNow from './components/stateNow';
import Reasons from './components/resons';
import Payment from './components/payment';
import Final from './components/final';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route path="/products"><Products></Products></Route>
            <Route path="/payment"><Payment></Payment></Route>
            <Route path="/end"><Final/></Route>
            <Route path="/">
              <About>
                <History></History>
                <Reasons></Reasons>
                <StateNow></StateNow>
              </About>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
