class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  whoIsOlder(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " " + "è più vecchio di " + otherUser.firstName;
    } else if (this.age < otherUser.age) {
      return otherUser.firstName + " " + "è più vecchio di " + this.firstName;
    } else {
      return (
        otherUser.firstName + " e " + this.firstName + " hanno la stessa età"
      );
    }
  }
}

const x = new User("XName", "XSurname", 90, "Italy");
const y = new User("YName", "YSurname", 80, "France");
console.log(x.whoIsOlder(y));

///////////////////////////////////////////////////////////// PETS FORM ///////////////////////////////////////////////////////////////////////////////////
const petInput = document.getElementById("name");
const ownerInput = document.getElementById("owner");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const submitButton = document.getElementById("form div button");

const pets = [];

//  CLASSE PET PER CREARE OGGETTO DA DATI RECUPERATI DA FORM
class Pet {
  constructor(_petName, _owner, _species, _breed) {
    this.petName = _petName;
    this.owner = _owner;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(otherOwner) {
    return this.owner === otherOwner.owner;
  }
}

const createCard = function () {
  const row = document.getElementById("pets");
  row.innerHTML = "";
  pets.forEach((pet) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
        <div class="card">
         <div class="card-body border border-warning">
           <h5 class="card-title text-danger">${pet.petName.toUpperCase()}</h5>
           <h6 class="card-subtitle mb-2 text-body-secondary ">${pet.owner}</h6>
           <h6 class="card-subtitle mb-2 text-body-secondary">${
             pet.species
           }</h6>
           <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
         </div>
        </div>
    `;
    row.appendChild(newCol);
  });

  // SVUOTO IL FORM AD OPERAZIONE COMPLETATA
  petInput.value = "";
  ownerInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

// ASSEGNO IL COMPORTAMENTO AD INVIO FORM
const comportamentoForm = document.getElementsByTagName("form")[0];
comportamentoForm.addEventListener("submit", function (e) {
  e.preventDefault(); //EVITO CHE LA PAGINA SI REFRESHI PERDENDO I DATI

  const pet = new Pet(
    petInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  );

  const hannoStessoProprietario = pets.some((petEsistente) =>
    pet.sameOwner(petEsistente)
  );

  if (hannoStessoProprietario && pets.length > 0) {
    console.log("GLI ANIMALI IN QUESTIONE HANNO LO STESSO PADRONE");
  } else if (!hannoStessoProprietario && pets.length > 0) {
    console.log("GLI ANIMALI IN QUESTIONE NON HANNO LO STESSO PADRONE");
  } else {
    console.log(
      "SOLO 1 CARD PET CREATE, CREANE PIù DI UNA PER VEDERE SE HANNO LO STESSO PROPRIETARIO"
    );
  }

  console.log("PET CARD CREATA");
  pets.push(pet);
  createCard();
});
