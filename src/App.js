import './App.css';
import MainChat from './components/main_chat';
import ProfileBar from './components/profile_bar';
import SideBar from './components/side_bar';

function App() {
  return (
    <div className="App">
      <ProfileBar/>
      <SideBar/>
      <MainChat/>
    </div>
  );
}

export default App;
