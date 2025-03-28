import React, { lazy, Suspense, useState } from "react";

// Lazy-loaded components
const Home = lazy(() => import("./NestedRoutes"));


const LazyLoadedComponent = () => {
  const [component, setComponent] = useState("home");

  return (
    <div className="p-6 text-center">
      <div className="space-x-4 mb-4">
        <button onClick={() => setComponent("home")} className="px-4 py-2 bg-blue-500 text-white rounded">Home</button>
     
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {component === "home" && <Home />}
      
      </Suspense>
    </div>
  );
};

export default LazyLoadedComponent;
