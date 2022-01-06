import React from "react";
import { Route, Routes } from "react-router";
import AdminLogin from "../screens/AdminLogin";
import Login from "../screens/Login";
import PatientDetails from "../screens/PatientDetails";
import PatientsList from "../screens/PatientsList";
import RegisterPatient from "../screens/RegisterPatient";
import Signup from "../screens/Signup";
import SinglePatient from "../screens/SinglePatient";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/patientDetails/:id" element={<PatientDetails />} />
      <Route path="/register/:id" element={<RegisterPatient />} />
      <Route path="lists" element={<PatientsList />} />
      <Route path="search" element={<SinglePatient />} />
    </Routes>
  );
};

export default Routing;
