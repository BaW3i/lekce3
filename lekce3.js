/* console.log('bbeeep')
const hodinovka = 300;
const pocetHodin = Number(prompt("Zadej hodiny", "160")); //fce number makes from string num
const plat = hodinovka * pocetHodin;

document.body.innerHTML = "<p> Pepa si vydělal" + plat + " korun </p>"



const jméno = prompt("Zadej jméno", "vaněk");
const věk = Number(prompt("Zadej věk", "48")); //fce number makes from string num

document.body.innerHTML = "<p> bumbum" + věk + jméno + " bum </p>" 


const hodinovýPlat = Number(prompt("zadej hodinovku", "0"));
const měsíčně = 8*21*hodinovýPlat; 

document.body.innerHTML = "<p> bude mít" + měsíčně + " bum </p>" */


//realitka

/* Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

Pomocí tečkové notace vypište do stránky dispozici bytu. YES
Vypište do stránky čistý nájem bez poplatků.  YES
Vypište do stránky celý objekt představující výměru bytu. YES
Do separátních proměnných uložte město a městskou část. Vypište je do stránky. 
Změnte stav inzerátu z 'free' na 'taken'. */

const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

document.body.innerHTML += "<p> dispozice je" + apartment.disposition + " bum </p>"
document.body.innerHTML += "<p> prachy jsou" + apartment.price.rent + " bum </p>"
document.body.innerHTML += "<p>Vymera bytu: "+ apartment.area.floorage + apartment.area.units +"</p>"

const city = apartment.city
const district = apartment.district
apartment.status = "taken";
document.body.innerHTML += "<p>Stav inzeratu: "+ apartment.status +"</p>"