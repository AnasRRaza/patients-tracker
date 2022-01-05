import React, { useState } from "react";
import Input from "../components/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import Button from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const userID = userCredential.user.uid;
      navigate(`/register/${userID}`);
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form ">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(value) => {
            setUser((prev) => ({
              ...prev,
              email: value,
            }));
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(value) => {
            setUser((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Input type="submit" />
      </form>
      <p>Or</p>
      <Button
        title="Sign In"
        onClick={() => {
          navigate("/login");
        }}
      />
    </div>
  );
};

export default Signup;