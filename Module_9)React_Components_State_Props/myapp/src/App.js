import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponets/Navbar';
import Footer from './MyComponets/Footer';
import LifecycleDemo from './MyComponets/LifecycleDemo';
import Login from './MyComponets/Login';

function App() {
  return (
    <>
   <Navbar/>
   <LifecycleDemo/>
   <Login/>

   <Footer/>
   </>
  );
}

export default App;
