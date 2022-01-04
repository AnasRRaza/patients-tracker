import React from "react";
import { Route, Routes } from "react-router";
import PatientsList from "../screens/PatientsList";
import RegisterPatient from "../screens/RegisterPatient";
import SinglePatient from "../screens/SinglePatient";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPatient />} />
      <Route path="lists" element={<PatientsList />} />
      <Route path="SinglePatient" element={<SinglePatient />} />
    </Routes>
  );
};

export default Routing;
