import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const SinglePatient = () => {
  const [searchPatient, setSearchPatient] = useState("");
  const [searchPatientByDate, setSearchPatientByDate] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(null);
  const [filteredPatientsByDate, setFilteredPatientsByDate] = useState(null);
  const [notFound, setNotFound] = useState("");
  const [notFoundDate, setNotFoundDate] = useState("");
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "patients"), (snapshot) => {
      setPatients(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  const findPatient = () => {
    const search = patients.filter((ele) => {
      return ele.name.toLowerCase() === searchPatient.toLowerCase();
    });

    if (search.length) {
      setFilteredPatients(search);
    } else {
      setFilteredPatients("");
      setNotFound("Patient not found");
    }
  };
  const findPatientByDate = () => {
    const search = patients.filter((ele) => {
      return ele.date === searchPatientByDate;
    });

    if (search.length) {
      setFilteredPatientsByDate(search);
    } else {
      setFilteredPatientsByDate("");
      setNotFoundDate("Patient not found");
    }
  };

  return (
    <div className="singlePatient">
      <h1>Search Patient</h1>
      <div>
        <input
          type="text"
          placeholder="Search Patient by Name"
          value={searchPatient}
          onChange={(e) => {
            setSearchPatient(e.target.value);
          }}
          style={{
            padding: "10px",
            fontSize: "18px",
            width: "300px",
          }}
        />
        <button
          style={{
            padding: "10px",
            fontSize: "18px",
          }}
          onClick={findPatient}
        >
          Search
        </button>
        <br />
      </div>
      <br />
      <div>
        <input
          type="date"
          placeholder="Search Patient by Date"
          value={searchPatientByDate}
          onChange={(e) => {
            setSearchPatientByDate(e.target.value);
          }}
          style={{
            padding: "10px",
            fontSize: "18px",
            width: "300px",
          }}
        />
        <button
          style={{
            padding: "10px",
            fontSize: "18px",
          }}
          onClick={findPatientByDate}
        >
          Search
        </button>
        <br />
      </div>
      {filteredPatients ? (
        filteredPatients.map((patient, ind) => {
          return (
            <div
              className="patientDetail"
              key={patient.name + patient.age + ind}
            >
              <p>
                Patient Name: <b> {patient.name}</b>
              </p>
              <p>
                Patient Age: <b>{patient.age}</b>
              </p>
              <p>
                Patient Disease: <b>{patient.disease}</b>
              </p>
              <p>
                Date of Registration: <b> {patient.date}</b>
              </p>
            </div>
          );
        })
      ) : (
        <h3>{notFound}</h3>
      )}
      {filteredPatientsByDate ? (
        filteredPatientsByDate.map((patient, ind) => {
          return (
            <div
              className="patientDetail"
              key={patient.name + patient.age + ind}
            >
              <p>
                Patient Name: <b> {patient.name}</b>
              </p>
              <p>
                Patient Age: <b>{patient.age}</b>
              </p>
              <p>
                Patient Disease: <b>{patient.disease}</b>
              </p>
              <p>
                Date of Registration: <b> {patient.date}</b>
              </p>
            </div>
          );
        })
      ) : (
        <h3>{notFoundDate}</h3>
      )}
    </div>
  );
};

export default SinglePatient;
