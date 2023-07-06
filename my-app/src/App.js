import './App.css';
import PostForm from './components/PostForm';
// import GrandParent from './components/GrandParent';
// import { ChannelProvider } from './components/channelContext';
// import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <ChannelProvider value="TWD">
          <GrandParent />
        </ChannelProvider>
      </UserProvider> */}
      <PostForm />
    </div>
  );
}

export default App;
