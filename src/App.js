import logo from './logo.svg';
import './App.css';
import Products from './components/products';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Products></Products>
      </Provider>
    </div>
  );
}

export default App;
