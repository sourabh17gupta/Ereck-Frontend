import { Routes,Route } from 'react-router-dom';
import TeamFormData from './Pages/TeamFormData';
import AboutUs from './Pages/AboutUs';
import './App.css'
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndCondition from './Pages/TermsAndCondition';
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs';
import EventPage from './Pages/EventPage';
import Error from './Pages/Error';
import Footer from './component/common/Footter';
import Gallery from './Pages/Gallery';
import Navbar from './component/common/Navbar';
import SignUp from './Pages/SignUp';
import Team from './Pages/Team';

function App() {
  return (
    <div>
      <Navbar />
      {/* Add padding top to push content below navbar */}
      <div className="pt-20">
        <Routes>
          <Route path='/teamData' element={<TeamFormData/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Privacy-Policy' element={<PrivacyPolicy/>}/>
          <Route path='/Terms-and-condition' element={<TermsAndCondition/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/team/:teamName' element={<Team/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/event' element={<EventPage/>}/>
          <Route path = '/signup' element={<SignUp/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}


export default App;
