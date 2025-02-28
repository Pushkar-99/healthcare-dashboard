import { React, useContext } from "react";
import Context from "../ContextAPI/Context";
const DiagnosticList = () => {
  const { result } = useContext(Context);
  const patientDiagnostics = result
    ? Object.values(result).filter((value) => value.name === "Jessica Taylor")
    : [];
  return (
    <div>
      <div
        className="card"
        style={{
          display: "flex",
          margin: "30px auto",
          borderRadius: "14px",
          width: "100%",
        }}
      >
        <div
          className="card-body"
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          <h4 className="card-title">Diagnostic List</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontWeight: "bold",
              backgroundColor: "#F6F7F8",
              borderRadius:"24px"
            }}
          >
            <span style={{ flex: 1, textAlign: "left" }}>
              Problem/Diagnosis
            </span>
            <span style={{ flex: 2, textAlign: "left" }}>Description</span>
            <span style={{ flex: 1, textAlign: "left" }}>Status</span>
          </div>
          {patientDiagnostics.length > 0 &&
          patientDiagnostics[0].diagnostic_list ? (
            patientDiagnostics[0].diagnostic_list.map((value) => {
              return (
                <div
                  key={value.name}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <span style={{ flex: 1, textAlign: "left" }}>
                    {value.name}
                  </span>
                  <span style={{ flex: 2, textAlign: "left" }}>
                    {value.description}
                  </span>
                  <span style={{ flex: 1, textAlign: "left" }}>
                    {value.status}
                  </span>
                </div>
              );
            })
          ) : (
            <span>No Diagnostic List</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;
