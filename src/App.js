import './App.css';
import Labs from './labs';
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<Labs/>}/>
              <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
