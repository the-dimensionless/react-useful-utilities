import "./App.css";
import { Routes, Route } from "react-router-dom";
import ThrottlingDemo from "./pages/throttling";
import DebounceDemo from "./pages/debounce";
import MainComponent from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainComponent />}>
        <Route path="/throttling" element={ThrottlingDemo} />
        <Route  path="/debounce" element={DebounceDemo} />
      </Route>

      {/*  <Route exact path="/home" component={}/> */}
    </Routes>
  );
}

export default App;
/* <div className="App">
     <h1>React Useful Utilites</h1>
     <nav>
       <Link className='link'  to="/throttling" el>Link 1</Link>
       <Link  className='link' to="">Link 2</Link>
       <Link   className='link' to="">Link 3</Link>
       <Link  className='link' to="">Link 4</Link>
     </nav>
    </div> */
