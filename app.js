const main = document.getElementById("main");
const buttons = document.getElementById("button-holder");
// const threeButtons = document.getElementById("three-buttons");

//Fetch users data from https://randomuser.me/api/?results=500&seed=foo
let url = "https://randomuser.me/api/?results=500&seed=foo";
async function peopleData(url) {
  const res = await fetch(url);
  const data = await res.json();

  // display female and male users count seperately

  let femaleNumber = data.results.filter(
    (person) => person.gender === "female"
  ).length;
  console.log(femaleNumber);

  let maleNumber = data.results.filter(
    (person) => person.gender === "male"
  ).length;
  console.log(maleNumber);

  // display all the users older than 40

  let older40 = data.results.filter((person) => person.dob.age > 40);
  console.log(older40);

  // display all the users from Germany

  let fromGermany = data.results.filter(
    (person) => person.location.country === "Germany"
  );
  console.log(fromGermany);

  // display the index position of the first user from Germany

  console.log(
    data.results.findIndex((person) => person.location.country === "Germany")
  );

  // find the first user whoose age is 28

  console.log(data.results.findIndex((person) => person.dob.age === 28));

  // generate a new user list from response:
  // add an ID property containing a random number between 1000 and 5000,
  // take only these properties: gender, full name (first + last name), city, country, email, username, password, age, picture(thumbnail)
  // and add an additional property as credit and give a random value to credit between 1 to 100.

  let arr = [];
  data.results.forEach((person) =>
    arr.push({
      id: Math.round(Math.random() * 4000) + 1000,
      gender: person.gender,
      fullName: person.name.first + " " + person.name.last,
      city: person.location.city,
      country: person.location.country,
      email: person.email,
      username: person.login.username,
      password: person.login.password,
      age: person.dob.age,
      picture: person.picture.thumbnail,
      credit: Math.round(Math.random() * 100),
    })
  );
  console.log(arr);

  // Develop a bootstrap card and display first 20 users whose credit is greater than 50
  // Add 3 buttons to filter users as all, female and male

  let creditOver50First20 = arr
    .filter((person) => person.credit > 50)
    .splice(0, 20);
  console.log(creditOver50First20);

  let card = "";
  creditOver50First20.forEach((person) => {
    card += `
    <div class="card mt-3" style="width: 18rem">
    <img src="${person.picture}" class="card-img-top rounded-circle p-4" alt="${person.fullName}">
    <div class="card-body">
    <h4 class="card-name d-flex justify-content-center">${person.fullName}</h4>
    <p class="card-text">Gender: ${person.gender}</p>
    <p class="card-text">Age: ${person.age}</p>
    <p class="card-text">ID: ${person.id}</p>
    <p class="card-text">City: ${person.city}</p>
    <p class="card-text">Country: ${person.country}</p>
    <p class="card-text">Email: ${person.email}</p>
    <p class="card-text">Username: ${person.username}</p>
    <p class="card-text">Password: ${person.password}</p>
    <p class="card-text">Credit: ${person.credit}</p>
    </div>
    </div>
    `;
  });
  main.innerHTML = card;

  threeButtons = `<div class="container d-flex justify-content-center align-items-center" id="three-buttons">
  <button class="btn btn-light m-2 me-5" id="all">All</button>
    <button class="btn btn-light m-2 me-5" id="female">Females</button>
    <button class="btn btn-light m-2 me-5" id="male">Males</button>
    </div>`;
  buttons.innerHTML = threeButtons;

  const all = document.getElementById("all");
  const female = document.getElementById("female");
  const male = document.getElementById("male");

  all.addEventListener("click", () => {
    main.innerHTML = "";
    creditOver50First20.forEach((person) => {
      card += `
      <div class="card mt-3" style="width: 18rem">
      <img src="${person.picture}" class="card-img-top rounded-circle p-4" alt="${person.fullName}">
      <div class="card-body">
      <h4 class="card-name d-flex justify-content-center">${person.fullName}</h4>
      <p class="card-text">Gender: ${person.gender}</p>
      <p class="card-text">Age: ${person.age}</p>
      <p class="card-text">ID: ${person.id}</p>
      <p class="card-text">City: ${person.city}</p>
      <p class="card-text">Country: ${person.country}</p>
      <p class="card-text">Email: ${person.email}</p>
      <p class="card-text">Username: ${person.username}</p>
      <p class="card-text">Password: ${person.password}</p>
      <p class="card-text">Credit: ${person.credit}</p>
      </div>
      </div>
      `;
      console.log(card);
    });
    main.innerHTML = card;
  });

  let cardFemale = "";
  female.addEventListener("click", () => {
    main.innerHTML = "";
    creditOver50First20
      .filter((person) => person.gender === "female")
      .forEach((person) => {
        //console.log(person)
        cardFemale += `
        <div class="card mt-3" style="width: 18rem">
        <img src="${person.picture}" class="card-img-top rounded-circle p-4" alt="${person.fullName}">
        <div class="card-body">
        <h4 class="card-name d-flex justify-content-center">${person.fullName}</h4>
        <p class="card-text">Gender: ${person.gender}</p>
        <p class="card-text">Age: ${person.age}</p>
        <p class="card-text">ID: ${person.id}</p>
        <p class="card-text">City: ${person.city}</p>
        <p class="card-text">Country: ${person.country}</p>
        <p class="card-text">Email: ${person.email}</p>
        <p class="card-text">Username: ${person.username}</p>
        <p class="card-text">Password: ${person.password}</p>
        <p class="card-text">Credit: ${person.credit}</p>
        </div>
        </div>
        `;
      });
    main.innerHTML = cardFemale;
  });

  let cardMale = "";
  male.addEventListener("click", () => {
    main.innerHTML = "";
    creditOver50First20
      .filter((person) => person.gender === "male")
      .forEach((person) => {
        //console.log(person)
        cardMale += `
        <div class="card mt-3" style="width: 18rem">
        <img src="${person.picture}" class="card-img-top rounded-circle p-4" alt="${person.fullName}">
        <div class="card-body">
        <h4 class="card-name d-flex justify-content-center">${person.fullName}</h4>
        <p class="card-text">Gender: ${person.gender}</p>
        <p class="card-text">Age: ${person.age}</p>
        <p class="card-text">ID: ${person.id}</p>
        <p class="card-text">City: ${person.city}</p>
        <p class="card-text">Country: ${person.country}</p>
        <p class="card-text">Email: ${person.email}</p>
        <p class="card-text">Username: ${person.username}</p>
        <p class="card-text">Password: ${person.password}</p>
        <p class="card-text">Credit: ${person.credit}</p>
        </div>
        </div>
        `;
      });
    main.innerHTML = cardMale;
  });
}
peopleData(url);
