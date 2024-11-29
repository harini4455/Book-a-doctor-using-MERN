// Sample doctors data
const doctors = [
    { id: 1, name: "Dr. Divyabharathy", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Harini", specialization: "Dermatologist" },
    { id: 3, name: "Dr. Hemnath", specialization: "Neurologist" },
    { id: 4, name: "Dr. Deepak", specialization: "Pediatrician" },
  ];
  
  // Populate the doctor list
  const doctorList = document.getElementById("doctor-list");
  doctors.forEach((doctor) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${doctor.name}</h3>
      <p>${doctor.specialization}</p>
    `;
    doctorList.appendChild(card);
  });
  
  // Populate the doctor dropdown in the booking form
  const doctorDropdown = document.getElementById("doctor");
  doctors.forEach((doctor) => {
    const option = document.createElement("option");
    option.value = doctor.id;
    option.textContent = `${doctor.name} (${doctor.specialization})`;
    doctorDropdown.appendChild(option);
  });
  
  // Handle form submission
  const bookingForm = document.getElementById("booking-form");
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const doctorId = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
  
    if (name && doctorId && date && time) {
      alert(
        `Appointment confirmed for ${name} with ${
          doctors.find((doc) => doc.id === parseInt(doctorId)).name
        } on ${date} at ${time}.`
      );
      bookingForm.reset();
    } else {
      alert("Please fill in all the fields.");
    }
  });
  
