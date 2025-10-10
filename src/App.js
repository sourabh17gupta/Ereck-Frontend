import { Routes,Route } from 'react-router-dom';
import TeamFormData from './Pages/TeamFormData';
import './App.css'
function App() {
  return(
    <div>
      <Routes>
        <Route path='/teamData' element={<TeamFormData/>}/>
      </Routes>

    </div>
  );
}

export default App;
