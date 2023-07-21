import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import store from './redux/store';
import HookEggContainer from './components/HookEggContainer';
import HookChickenContainer from './components/HookChickenContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EggContainer />
        <HookEggContainer />
        <HookChickenContainer />
      </Provider>
    </div>
  );
}

export default App;
