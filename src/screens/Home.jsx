import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="form">
      <h1>Patient Tracker</h1>
      <Button
        title="Patient Sign In"
        onClick={() => {
          navigate("/patientLogin");
        }}
      />
      <p>Or</p>
      <Button
        title="Admin Sign In"
        onClick={() => {
          navigate("/admin");
        }}
      />
      <p>Or</p>
      <Button
        title="Doctor Sign In"
        onClick={() => {
          navigate("/doctorLogin");
        }}
      />
    </div>
  );
};

export default Home;
