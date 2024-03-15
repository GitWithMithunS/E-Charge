// import logo from './logo.svg';
// import './App.css';
// import { Home } from './components/home/Home';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Home/>
//       </header>
//     </div>
//   );
// }
// export default App;


import './App.css';

import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Home } from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
