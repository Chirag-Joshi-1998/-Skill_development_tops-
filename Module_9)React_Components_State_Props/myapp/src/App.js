import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponets/Navbar';
import Footer from './MyComponets/Footer';
import LifecycleDemo from './MyComponets/LifecycleDemo';
import Login from './MyComponets/Login';
import Profie from './MyComponets/Profie';
import EventDemo from './MyComponets/EventDemo';
import { UserInputDisplay } from './MyComponets/UserInputDisplay';
import { Calculator } from './MyComponets/Calculator';
import { ToggleDiv } from './MyComponets/ToggleDiv';
import MyComponent from './MyComponets/MyComponent';
import StateUpdater from './MyComponets/StateUpdater';

function App() {
  return (
    <>
   <Navbar/>
   <LifecycleDemo/>
   <Login/>
   <Profie/>
   <EventDemo/>
   <UserInputDisplay/>
   <Calculator/>
   <ToggleDiv/>
   

   <div className="flex justify-center items-center min-h-screen bg-gray-100">
     <MyComponent name="Chirag" age={25} isStudent={true} />
 </div>
 <h1>React State Update Example</h1>
 <StateUpdater />
   <Footer/>
   </>
  );
}

export default App;
