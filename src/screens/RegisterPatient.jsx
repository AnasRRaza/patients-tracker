import React, { useState } from "react";
import Input from "../components/Input";

const RegisterPatient = () => {
  const [patientDetail, setPatientDetail] = useState({
    name: "",
    age: "",
    disease: "",
    date: new Date(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let patientsLists = [];
    patientsLists.push(patientDetail);
    patientsLists = patientsLists.concat(
      JSON.parse(localStorage.getItem("patients") || "[]")
    );
    console.log(patientsLists);
    localStorage.setItem("patients", JSON.stringify(patientsLists));

    setPatientDetail((prev) => ({
      ...prev,
      name: "",
      age: "",
      disease: "",
      date: "",
    }));
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <h1>Register Patients</h1>
        <Input
          required={true}
          placeholder="Name"
          type="text"
          value={patientDetail.name}
          onChange={(value) => {
            setPatientDetail((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        />
        <Input
          required={true}
          type="number"
          placeholder="Age"
          value={patientDetail.age}
          onChange={(value) => {
            setPatientDetail((prev) => ({
              ...prev,
              age: value,
            }));
          }}
        />
        <Input
          required={true}
          type="text"
          placeholder="Disease"
          value={patientDetail.disease}
          onChange={(value) => {
            setPatientDetail((prev) => ({
              ...prev,
              disease: value,
            }));
          }}
        />
        <Input
          required={true}
          type="date"
          value={patientDetail.date}
          onChange={(value) => {
            setPatientDetail((prev) => ({
              ...prev,
              date: value,
            }));
          }}
        />
        <Input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPatient;
