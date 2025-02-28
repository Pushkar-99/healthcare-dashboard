import { React } from "react";
const LabResults = (props) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "22rem",
          display: "flex",
          borderRadius: "14px",
          margin: "30px auto 0 auto",
        }}
      >
        <div
          className="card-body"
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          <h4 className="card-title">Lab Results</h4>
          {props.labResults.length > 0 ? (
            props.labResults.map((value) => {
              return (
                <div key={value} style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", backgroundColor: value === "CT Scans" ? "#F6F7F8" : "transparent"}}>
                  <span>{value}</span>
                  <i className="fas fa-arrow-down"></i>
                </div>
              );
            })
          ) : (
            <span>No Lab Results</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabResults;
