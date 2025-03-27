import logo from './logo.svg';
import './App.css';
import RendringList from './MyComponets/RendringList';
import ForUseRef from './MyComponets/ForUseRef';
import ForUseEffect from './MyComponets/ForUseEffect';
import ForuseContext from './MyComponets/ForuseContext';
import ForUseReducer from './MyComponets/ForUseReducer';
import ForuseCallback from './MyComponets/ForuseCallback';
import ForUseMemo from './MyComponets/ForUseMemo';
import UseCustomeHook from './MyComponets/UseCustomeHook';
import UseFormComponent from './MyComponets/UseFormComponent';

function App() {
  return (
   <>
   <RendringList/>
   <ForUseRef/>
   <h1>UseEffect Hook</h1>
   <ForUseEffect/> 
   <ForuseContext/>
   <ForUseReducer/>
   <ForuseCallback/>
   <ForUseMemo/>
   <UseCustomeHook/>
   <UseFormComponent/>
   </>
  );
}

export default App;
