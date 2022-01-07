import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../components/Input";
import { db } from "../../firebase";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [doctorDetail, setDoctorDetail] = useState({
    email: "",
    password: "",
  });
  const [doctors, setDoctors] = useState([]);
  const [findDoctor, setFindDoctor] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "doctors"), (snapshot) => {
      setDoctors(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    console.log(doctors);
  }, [doctors]);

  // useEffect(() => {
  //   console.log(findDoctor);
  // }, [findDoctor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = doctors?.find((ele) => {
      return (
        ele.email === doctorDetail.email &&
        ele.password === doctorDetail.password
      );
    });
    console.log(search);
    if (search) {
      navigate(`/createPatient/${search.id}`);
    } else {
      alert("Email or Password not found");
    }
    // setFindDoctor(search);
    // console.log(findDoctor);
  };

  return (
    <div className="form">
      <h1>Login Doctor</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={doctorDetail.email}
          onChange={(value) => {
            setDoctorDetail((prev) => ({
              ...prev,
              email: value,
            }));
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          value={doctorDetail.password}
          onChange={(value) => {
            setDoctorDetail((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Input type="submit" />
      </form>
    </div>
  );
};

export default DoctorLogin;
