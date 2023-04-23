import './App.css';
import GetPlayers from './components/GetPlayers';
import PlayerState from './context/PlayerState';


function App() {

  
  
  return (
    <PlayerState>
    <div>
      <GetPlayers />
     </div> 
    </PlayerState>
  );
}

export default App;
