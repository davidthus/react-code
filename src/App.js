import Lazy from './Lazy';

// import("./math").then(math => {    DYNAMIC IMPORT
//   console.log(math.add(16, 26));
// });

// import { add } from './math';      NORMAL IMPORT

// console.log(add(16, 26));


function App() {
  return (
    <div className="App">
      <Lazy />
    </div>
  );
}

export default App;
