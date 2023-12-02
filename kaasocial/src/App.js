import './App.css'
import Leftbar from './Components/LeftsideContainer/Leftbar';
import Mainpost from './Components/MainPostContainer/MainPost';
import Navbar from './Components/Navbar/Navbar';
import Rightbar from './Components/RightsideContainer/Rightbar';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Leftbar/>
      <Mainpost/>
      <Rightbar />
    </div>
  );
}

export default App;
