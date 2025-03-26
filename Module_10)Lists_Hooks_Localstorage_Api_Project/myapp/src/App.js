import logo from './logo.svg';
import './App.css';
import RendringList from './MyComponets/RendringList';
import ForUseRef from './MyComponets/ForUseRef';
import ForUseEffect from './MyComponets/ForUseEffect';

function App() {
  return (
   <>
   <RendringList/>
   <ForUseRef/>
   <h1>UseEffect Hook</h1>
   <ForUseEffect/>
   </>
  );
}

export default App;
