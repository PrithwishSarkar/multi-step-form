
import { useState } from 'react';
import './App.css';
import Form1 from './Components/Form1';
import Form2 from './Components/Form2';
import Form3 from './Components/Form3';
import Posts from './Components/Posts';
// import ToggleBar from './Components/ToggleBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [addr, setaddr] = useState("");
  const [cc, setcc] = useState("");
  const [ph, setph] = useState("");
  const [validone, setone] = useState(false);
  const [validtwo, settwo] = useState(false);
  // const [data, setdata] = useState([]);
  function onedata(e, p) {
    setmail(e);
    setpass(p);
    setone(true);
  }
  function twodata(f, l, a) {
    setfname(f);
    setlname(l);
    setaddr(a);
    settwo(true);
  }
  function threedata(c, n) {
    setcc(c);
    setph(n);
    setone(false);
    settwo(false);
  }
  return (
    <div className="App">

      <BrowserRouter>

        {/* <ToggleBar /> */}

        <Routes>
        <Route path='/' element={<Form1 func={onedata} />} />
          <Route path='/form1' element={<Form1 func={onedata} one={validone} two={validtwo} />} />
          <Route path='/form2' element={<Form2 func={twodata} two={validtwo} />} />
          <Route path='/form3' element={<Form3 func={threedata} />} />
          <Route path='/posts' element={<Posts e={mail} p={pass} f={fname} l={lname} a={addr} c={cc} n={ph} />} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
