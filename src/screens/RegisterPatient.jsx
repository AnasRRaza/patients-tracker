import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate, useParams } from "react-router";
import { db } from "../firebase";
import InputImage from "../components/InputImage";

const RegisterPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [patientDetail, setPatientDetail] = useState({
    name: "",
    age: 0,
    disease: "",
    date: "",
    patientId: id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = { patientDetail, ...image };
    console.log(image);
    try {
      const docRef = await addDoc(collection(db, "patients"), details);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setPatientDetail((prev) => ({
      ...prev,
      name: "",
      age: 0,
      disease: "",
      date: "",
      patientId: "",
    }));
    navigate(`/patientDetails/${id}`);
  };

  return (
    <div className="form">
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
        <InputImage
          title="Select Image:"
          value={image}
          onChange={(files) => {
            if (files?.length) {
              setImage(files[0]);
            } else {
              setImage(null);
            }
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
