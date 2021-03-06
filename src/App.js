
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";

import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';
import LabElement from "./pages/lab";

import LabMain from "./pages/labMain";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="lab/:program" element={<LabMain/>}>

          <Route path="aim" element={<LabElement title ="aim"/>} />
          <Route path="theory" element={<LabElement title ="theory"/>} 
          />
          <Route path="procedure" element={<LabElement title ="procedure"/>}         
          />
          <Route path="simulation" element={<LabElement title ="simulation"/>}         
          />
          <Route path="references" element={<LabElement title ="reference"/>}         
          />
        </Route>,
        {/* <Route path="/sim1" element={<Simulation />} />,
        <Route path="/theory1" element={<Theory1 />} />
        <Route path="/pretest1" element={<PreTest1/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
