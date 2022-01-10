import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Input from "../components/Input";
import { useNavigate, useParams } from "react-router";
import { db, storage } from "../firebase";
import InputImage from "../components/InputImage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const RegisterPatient = () => {
  const { id } = useParams();
  // console.log(id);

  const patientId = id.split(".")[0];
  const doctorId = id.split(".")[1];

  // console.log({ patientId });
  // console.log({ doctorId });

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [patientDetail, setPatientDetail] = useState({
    name: "",
    age: 0,
    disease: "",
    date: "",
    patientId: patientId,
    doctorId: doctorId,
    imageUrl: "",
  });

  const fileUpload = async () => {
    return new Promise((resolve, reject) => {
      const fileRef = ref(storage, `images/${Date.now() + image.name}`);
      console.log(fileRef);

      const uploadTask = uploadBytesResumable(fileRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
          reject(error);
        },
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fileUpload()
      .then((data) => {
        setPatientDetail((prev) => ({
          ...prev,
          imageUrl: data,
        }));
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(patientDetail);
    try {
      const docRef = addDoc(collection(db, "patients"), patientDetail);
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
      imageUrl: "",
    }));
    navigate(`/patientDetails/${patientId}`);
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
              console.log(files[0]);
              console.log(image);
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
    </div>
  );
};

export default RegisterPatient;
