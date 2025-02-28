import { React, useContext, useEffect } from "react";
import Context from "../ContextAPI/Context";
import DiagnosticList from "../Components/DiagnosticList";
import Chart from "../Chart/Chart";

const DiagnosisHistory = () => {
  const contextAPI = useContext(Context);
  const { getAllPatientInfo, result } = contextAPI;
  const patientResult = result
    ? Object.values(result).filter((value) => value.name === "Jessica Taylor")
    : [];

  useEffect(() => {
    getAllPatientInfo();

    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <div
        className="card"
        style={{
          width: "766px",
          height: "673px",
          marginTop:"30px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Diagnosis History</h5>
        </div>

        <Chart />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "14px",
            margin: "auto",
            paddingTop:"30px"
          }}
        >
          {patientResult.length > 0 && patientResult[0].diagnosis_history ? (
            (() => {
              const firstRecord = patientResult[0].diagnosis_history[0];
              return (
                <>
                  <div
                    key={firstRecord.month + "." + firstRecord.year + "." + firstRecord.respiratory_rate.value}
                    className="card"
                    style={{
                      width: "228px",
                      borderRadius: "12px",
                      height: "242px",
                      margin: "0 0 25px 0",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        background: "#E0F3FA 0% 0% no-repeat padding-box",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent: "flex-end"
                      }}
                    >
                      <i className="fas fa-lungs fa-2xl" style={{margin:"auto auto auto 0"}}></i>
                      <span className="card-title">Respiratory Rate</span>
                      <h2 className="card-title">
                        {firstRecord.respiratory_rate.value} bpm
                      </h2>
                      <span className="card-title">
                        {firstRecord.respiratory_rate.levels}
                      </span>
                    </div>
                  </div>
                  <div
                    key={firstRecord.month + "." + firstRecord.year + "." + firstRecord.temperature.value}
                    className="card"
                    style={{
                      width: "228px",
                      borderRadius: "12px",
                      height: "242px",
                      margin: "0 0 25px 0",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        background: "#FFE6E9 0% 0% no-repeat padding-box",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent: "flex-end"
                      }}
                    >
                      <i className="fas fa-temperature-three-quarters fa-2xl" style={{margin:"auto auto auto 0"}}></i>
                      <span className="card-title">Temperature</span>
                      <h2 className="card-title">
                        {firstRecord.temperature.value} °F
                      </h2>
                      <span className="card-title">
                        {firstRecord.temperature.levels}
                      </span>
                    </div>
                  </div>
                  <div
                    key={firstRecord.month + "." + firstRecord.year + "." + firstRecord.heart_rate.value}
                    className="card"
                    style={{
                      width: "228px",
                      borderRadius: "12px",
                      height: "242px",
                      margin: "0 0 25px 0",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        background: "#FFE6F1 0% 0% no-repeat padding-box",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent: "flex-end"
                      }}
                    >
                      <i className="fas fa-heart-pulse fa-2xl" style={{margin:"auto auto auto 0"}}></i>
                      <span className="card-title">Heart Rate</span>
                      <h2 className="card-title">
                        {firstRecord.heart_rate.value} bpm
                      </h2>
                      <span className="card-title">
                        <i className="fas fa-caret-down"></i>{" "}
                        {firstRecord.heart_rate.levels}
                      </span>
                    </div>
                  </div>
                </>
              );
            })()
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
      <DiagnosticList />
    </div>
  );
};

export default DiagnosisHistory;
