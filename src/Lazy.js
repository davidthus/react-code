import React, { Suspense, lazy} from 'react';

// import OtherComponent from './OtherComponent';


const OtherComponent = lazy(() => import('./OtherComponent'));

function Lazy(){
  return (
    <div>
    <Suspense fallback={<div style={{position: 'fixed', inset: 0, background: 'blue'}}>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  )
}

// The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.

export default Lazy;

