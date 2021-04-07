const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault();
  const login = formElement.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {
      // Create user info
      const pictureElement = document.createElement("img");
      pictureElement.src = user.avatar_url;
      const nameElement = document.createElement("div");
      nameElement.textContent = user.name;
      const websiteElement = document.createElement("a");
      websiteElement.href = user.blog;
      websiteElement.textContent = websiteElement.href;
      const infosElement = document.getElementById("infos");
      infosElement.innerHTML = ""; 
      infosElement.appendChild(pictureElement);
      infosElement.appendChild(nameElement);
      infosElement.appendChild(websiteElement);
    })
    .catch(err => {
      console.log(err.message);
    });
});