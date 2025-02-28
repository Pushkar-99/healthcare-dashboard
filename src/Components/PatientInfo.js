import { React, useContext } from "react";
import Context from "../ContextAPI/Context";
import LabResults from "../Components/LabResults.js";

const PatientInfo = () => {
    const { result } = useContext(Context);
    const patientData = result ? Object.values(result).filter(value => value.name === "Jessica Taylor") : [];

    return (
        <div style={{display:"flex", flexDirection:"column", margin:"0 30px auto"}}>
            {
            patientData.length > 0 ? (
                patientData.map((value) => (
                    <div key={value.name} className="card" style={{ width: "22rem", display: "flex", margin: "30px auto 0 auto", height: "673px", borderRadius: "14px" }}>
                        <img src={value.profile_picture} alt={value.name} style={{ width: "40%", display: "block", margin: "30px auto 0" }} />
                        <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            <h3 className="card-title" style={{ textAlign: "center" }}>{value.name}</h3>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <i className="fas fa-calendar"></i>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span>Date Of Birth</span>
                                    <span style={{ fontWeight: 'bold' }}>{value.date_of_birth}</span>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <i className="fas fa-venus"></i>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span>Gender</span>
                                    <span style={{ fontWeight: 'bold' }}>{value.gender}</span>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <i className="fas fa-phone"></i>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span>Contact Info.</span>
                                    <span style={{ fontWeight: 'bold' }}>{value.phone_number}</span>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <i className="fas fa-phone"></i>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span>Emergency Contacts</span>
                                    <span style={{ fontWeight: 'bold' }}>{value.emergency_contact}</span>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <i className="fas fa-shield"></i>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span>Insurance Provider</span>
                                    <span style={{ fontWeight: 'bold' }}>{value.insurance_type}</span>
                                </div>
                            </div>

                            <button type="button" className="btn show-info" style={{ backgroundColor: "cyan", borderRadius: '18px', display: "block", margin: "20px auto" }}>
                                Show all Information
                            </button>
                        </div>
                    </div>
                ))
            ): (
                <p style={{ textAlign: "center", marginTop: "20px" }}>No patient data</p>
            )}

            <LabResults labResults={patientData.length > 0 ? patientData[0].lab_results : []} />
        </div>
    );
};

export default PatientInfo;
