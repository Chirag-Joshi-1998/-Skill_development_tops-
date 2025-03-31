
import './App.css';
import ForReactBootstrap from './MyComponets/ForReactBootstrap';
import UseTailwindinReact from './MyComponets/UseTailwindinReact';
import UseMaterialUIComponent from './MyComponets/UseMaterialUIComponent';
import UseRouter from './MyComponets/UseRouter';
import NestedRoutes from './MyComponets/NestedRoutes';
import LazyLoadedComponent from './MyComponets/LazyLoadedComponent';
import Auth from './MyComponets/Auth';
import AnimatedComponent from './MyComponets/AnimatedComponent';
import FakeJsonAPI from './MyComponets/FakeJsonAPI';

function App() {
  return (

    <>
    <UseRouter/>
      <ForReactBootstrap />
      <UseTailwindinReact />
      <UseMaterialUIComponent/>
      <NestedRoutes/>
      <LazyLoadedComponent/>
      <Auth/>
      <AnimatedComponent/>
      <FakeJsonAPI/>
    </>
  );
}

export default App;
