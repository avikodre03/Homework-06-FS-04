
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <div className='Screen'>
      <Navbar/>
      <Main/>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
