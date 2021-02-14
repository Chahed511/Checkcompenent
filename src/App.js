import './App.css';
import Navbar from './components/navbar'
import ProfilePhoto from './components/profile/ProfilPhoto'
import Fulname from './components/profile/FullName'
import Addressuser from './components/profile/Address'

function App() {

  return (
    <div className="App">
      
      {/* Navbar part */}
      <Navbar />
      <div className="profil">
        {/* photo part */}
        <ProfilePhoto />
        

           {/* Name art */}
           <Fulname />
              {/*address part */}
        <Addressuser />
        </div>
    </div>
  );
}

export default App;
