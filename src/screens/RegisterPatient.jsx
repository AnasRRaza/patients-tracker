import React, { useState } from "react";
import Input from "../components/Input";

const RegisterPatient = () => {
  const [patientDetail, setPatientDetail] = useState({
    name: "",
    age: "",
    disease: "",
    date: "",
  });

  const handleChange = (e) => {};

  return (
    <div className="register-form">
      <h1>Register Patients</h1>
      <Input
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
      <Input type="date" placeholder="Date" value={patientDetail.date} />
    </div>
  );
};

export default RegisterPatient;
