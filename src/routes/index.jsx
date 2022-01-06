import React from "react";
import { Route, Routes } from "react-router";
import AdminDashboard from "../screens/admin/AdminDashboard";
import AdminLogin from "../screens/admin/AdminLogin";
import CreateDoctor from "../screens/doctor/CreateDoctor";
import DoctorLogin from "../screens/doctor/DoctorLogin";
import Login from "../screens/PatientLogin";
import PatientDetails from "../screens/PatientDetails";
import PatientsList from "../screens/PatientsList";
import RegisterPatient from "../screens/RegisterPatient";
import Signup from "../screens/Signup";
import SinglePatient from "../screens/SinglePatient";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/patientLogin" element={<Login />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/createDoctor" element={<CreateDoctor />} />
      <Route path="/doctorLogin" element={<DoctorLogin />} />
      <Route path="/patientDetails/:id" element={<PatientDetails />} />
      <Route path="/register/:id" element={<RegisterPatient />} />
      <Route path="lists" element={<PatientsList />} />
      <Route path="search" element={<SinglePatient />} />
    </Routes>
  );
};

export default Routing;
