import './App.css';
import HelloWorld from "./labs/a6/hello-world";
import Labs from './labs';
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index
                     element={<Labs/>}/>
              <Route path="/hello"
                   element={<HelloWorld/>}/>
              <Route path="/tuiter*"
                   element={<Tuiter/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
