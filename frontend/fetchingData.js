function getPersonData() {
  const URL = "https://webapis.bloomtechdev.com/users";
  const div = document.getElementById("info-div");
  const loadingDiv = document.getElementById("loading-div");

  fetch(URL)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      data.forEach((person) => {
        const personDiv = document.createElement("div");
        const name = document.createElement("h2");
        const bio = document.createElement("p");

        name.innerHTML = person.name;
        bio.textContent = person.bio;

        personDiv.appendChild(name);
        personDiv.appendChild(bio);

        div.appendChild(personDiv);
      });
      loadingDiv.style.display = "none";
      console.log(data);
    })
    .catch((error) => {
      const errorDiv = document.getElementById("error-div");
      const errorMessage = document.createElement("h2");
      errorDiv.appendChild(errorMessage);
      errorMessage.style.color = "red";
      errorMessage.textContent = "Something went wrong! Try again soon...";

      const errorInfo = document.createElement("p");
      errorDiv.appendChild(errorInfo);
      errorInfo.style.color = "red";
      errorInfo.textContent = error;

      loadingDiv.style.display = "none";
    });
}

getPersonData();
