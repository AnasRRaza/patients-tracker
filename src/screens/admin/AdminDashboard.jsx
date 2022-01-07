import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="form">
      <h1>Admin Dashboard</h1>
      <Button
        title="See All Patients"
        onClick={() => {
          navigate("/lists");
        }}
      />
      <Button
        title="Create New Doctor"
        onClick={() => {
          navigate("/createDoctor");
        }}
      />
      <Button
        title="See All Doctors"
        onClick={() => {
          navigate("/doctorsLists");
        }}
      />
    </div>
  );
};

export default AdminDashboard;
