import { React, useContext } from "react";
import Context from "../ContextAPI/Context";

const Patients = () => {
  const { result } = useContext(Context);
  return (
    <div>
      <div className="card" style={{ width: "20rem", borderRadius:"18px", margin:"30px", height:"140vh", overflowY:"auto"}}>
        <div className="card-body" style={{display:"flex", flexDirection:"column", gap:"15px"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4>Patients</h4>
            <i className="fas fa-magnifying-glass"></i>
          </div>
          {
            result && Object.values(result).map((value) => {
                return (
                    <div key={value.name} style={{display:"flex", flexDirection:"row", gap:"20px", alignItems:"center", backgroundColor: value.name === "Jessica Taylor" ? "#D8FCF7" : "transparent"}}>
                        <img src={value.profile_picture} alt={value.name} style={{width:"60px"}} />
                        <div style={{display:"flex", flexDirection:"column"}}>
                          <span>{value.name}</span>
                          <span>{value.gender}, {value.age}</span>
                        </div>
                        <i className="fas fa-ellipsis" style={{marginLeft:"auto"}}></i>
                    </div>
                )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Patients;
