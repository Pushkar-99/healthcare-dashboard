import { React } from "react";
import DiagnosisHistory from "./Components/DiagnosisHistory.js";
import PatientInfo from "./Components/PatientInfo.js";
import ContextAPI from "./ContextAPI/ContextAPI.js";
import Patients from "./Components/Patients.js";
import Navbar from "./Components/Navbar.js";
function App() {
  return (
    <ContextAPI>
      <div style={{ display: "flex", flexDirection: "column"}}>
        <Navbar />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Patients />
          <DiagnosisHistory />
          <PatientInfo />
        </div>
      </div>
    </ContextAPI>
  );
}

export default App;
