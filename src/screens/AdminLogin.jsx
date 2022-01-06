import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (admin.username === "admin" && admin.password === "admin") {
      setAdmin({
        username: "",
        password: "",
      });
      navigate("/lists");
    }
  };

  return (
    <div className="form">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="name"
          placeholder="Username"
          required={true}
          value={admin.username}
          onChange={(value) => {
            setAdmin((prev) => ({
              ...prev,
              username: value,
            }));
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          required={true}
          value={admin.password}
          onChange={(value) => {
            setAdmin((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Button title="Submit" />
      </form>
    </div>
  );
};

export default AdminLogin;
