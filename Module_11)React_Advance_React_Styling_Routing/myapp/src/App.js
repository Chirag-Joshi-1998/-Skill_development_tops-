
import './App.css';
import ForReactBootstrap from './MyComponets/ForReactBootstrap';
import UseTailwindinReact from './MyComponets/UseTailwindinReact';
import UseMaterialUIComponent from './MyComponets/UseMaterialUIComponent';
import UseRouter from './MyComponets/UseRouter';
import NestedRoutes from './MyComponets/NestedRoutes';
import LazyLoadedComponent from './MyComponets/LazyLoadedComponent';

function App() {
  return (

    <>
    <UseRouter/>
      <ForReactBootstrap />
      <UseTailwindinReact />
      <UseMaterialUIComponent/>
      <NestedRoutes/>
      <LazyLoadedComponent/>
    </>
  );
}

export default App;
