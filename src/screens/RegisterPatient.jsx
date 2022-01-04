import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router";

const RegisterPatient = () => {
  const navigate = useNavigate();

  const [patientDetail, setPatientDetail] = useState({
    name: "",
    age: "",
    disease: "",
    date: "",
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
    navigate("/lists");
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
      OR
      <br />
      <Button
        title="See All Patients"
        onClick={() => {
          navigate("/lists");
        }}
      />
      <br />
      OR
      <br />
      <Button
        title="Search Patient"
        onClick={() => {
          navigate("/SinglePatient");
        }}
      />
    </div>
  );
};

export default RegisterPatient;
