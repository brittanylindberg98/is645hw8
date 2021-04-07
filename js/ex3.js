const traveler = {
  name: "Brittany Lindberg",
  countries: [
    {
      name: "England",
      year: 2018
    },
    {
      model: "Mexico",
      color: 2017
    },
    {
      model: "Israel",
      color: 2019
    }
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });