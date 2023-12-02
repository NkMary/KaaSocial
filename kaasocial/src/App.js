import './App.css'
import Leftbar from './Components/LeftsideContainer/Leftbar';
import MainPost from './Components/MainPostContainer/MainPost';
import Navbar from './Components/Navbar/Navbar';
import Rightbar from './Components/RightsideContainer/Rightbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Leftbar />
      <MainPost />
      <Rightbar />
      
    </div>
  );
}

export default App;
