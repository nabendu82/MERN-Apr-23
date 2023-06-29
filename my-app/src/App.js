import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greeting name="JavaScript" type="FPL">Language of web</Greeting>
      <Greeting name="Swift" type="OOP">Language of iOS apps</Greeting>
      <Greeting name="Java" type="OOP" />
      <hr />
      <Welcome name="Rust" />
      <Welcome name="React Native" />
      <Welcome name="Flutter">Language of cross-mobile development</Welcome>
    </div>
  );
}

export default App;
