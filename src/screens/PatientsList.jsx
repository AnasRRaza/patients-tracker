import React from "react";
import { useNavigate } from "react-router";

const PatientsList = () => {
  const navigate = useNavigate();

  const lists = localStorage.getItem("patients");
  const patients = JSON.parse(lists);

  return (
    <div className="patientsList">
      <h1>Patients Lists</h1>
      {patients?.map((patient) => {
        return (
          <div className="patientDetail" key={patient.name + patient.age}>
            <p>
              Patient Name: <b> {patient.name}</b>
            </p>
            <p>
              Patient Age: <b>{patient.age}</b>
            </p>
            <p>
              Patient Disease: <b>{patient.disease}</b>
            </p>
            <p>
              Date of Registration: <b> {patient.date}</b>
            </p>
          </div>
        );
      })}
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
      >
        Register New Patient
      </button>
    </div>
  );
};

export default PatientsList;
