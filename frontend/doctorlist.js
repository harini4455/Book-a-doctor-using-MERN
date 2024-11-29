import React, { useState, useEffect } from "react";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <div>
      <h2>Our Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            {doctor.name} - {doctor.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
