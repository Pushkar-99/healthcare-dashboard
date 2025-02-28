import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  return (
    <div style={{width:"100%"}}>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ borderRadius: "22px", width:"100%" }}
      >
        <a className="navbar-brand" href="/" style={{ fontWeight: "bold" }}>
          Tech.Care
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{margin:"auto", display:"flex", flexDirection:"row", gap:"14px"}}>
            <a className="nav-item nav-link" href="/">
              <i className="fas fa-house"></i> Overview{" "}
              <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-item nav-link active"
              href="/patients"
              style={{ backgroundColor: "#01F0D0 0% 0% no-repeat padding-box", borderRadius: "22px" }}
            >
              <i className="fas fa-users"></i> Patients
            </a>
            <a className="nav-item nav-link" href="/schedule">
              <i className="fas fa-calendar"></i> Schedule
            </a>
            <a className="nav-item nav-link" href="/message">
              <i className="fas fa-message"></i> Message
            </a>
            <a className="nav-item nav-link" href="/transaction">
              <i className="fas fa-credit-card"></i> Transaction
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <i className="fa-regular fa-user"></i>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>Dr.Jose Simmons</span>
            <span>General Practitioner</span>
          </div>
          <i className="fas fa-gear"></i>
          <i className="fas fa-ellipsis-vertical"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
