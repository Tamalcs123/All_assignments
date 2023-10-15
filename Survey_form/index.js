const countrySelect = document.getElementById("country");

async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const asianCountries = data
      .filter((country) => country.region === "Asia")
      .map((country) => country.name.common);

    asianCountries.sort();

    asianCountries.forEach((countryName) => {
      const option = document.createElement("option");
      option.value = countryName;
      option.textContent = countryName;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchCountries();

document.getElementById("submitButton").addEventListener("click", () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = countrySelect.value;
  const gender = [];
  if (document.getElementById("male").checked) gender.push("Male");
  if (document.getElementById("female").checked) gender.push("Female");
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    gender.length > 0 &&
    profession &&
    email &&
    mobile
  ) {
    const popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = `
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>Date of Birth: ${dob}</p>
            <p>Country: ${country}</p>
            <p>Gender: ${gender.join(", ")}</p>
            <p>Profession: ${profession}</p>
            <p>Email: ${email}</p>
            <p>Mobile Number: ${mobile}</p>
        `;

    const popup = document.getElementById("popup");
    popup.style.display = "block";

    document.getElementById("surveyForm").reset();
  } else {
    alert("Please fill out all required fields.");
  }
});

document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("surveyForm").reset();
});

document.getElementById("closeButton").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});
