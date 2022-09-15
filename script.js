import Address from "./class Address.js";
import Citizen from "./class Citizen.js"
import register from "./class Citizen.js"


window.onload = (event) => {
    let div = document.createElement('div');
    div.className = "button";
    div.id = 'divCreate';
    div.innerHTML = "<button id='pushButton'>Create</button>";
    document.body.append(div);
    document.getElementById('pushButton').addEventListener('click', sozdat);
}


function sozdat() {
    let div = document.createElement('div');
    div.className = "button2";
    div.id = 'divCitizen';
    div.innerHTML = "<button id='push'>Create citizen</button>";
    document.body.append(div);
    document.getElementById('divCreate').style.display = 'none';

    let div2 = document.createElement('div');
    div2.className = "button3";
    div2.innerHTML = "<button id='reg'>REG</button>";
    document.body.append(div2);
    document.getElementById('reg').addEventListener('click', sozdatTri);

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "country";
    input.className = "input";
    input.id = "country";
    input.style.display = 'none';
    document.body.append(input);

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "city";
    input.className = "input";
    input.id = "city";
    input.style.display = 'none';
    document.body.append(input);

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "street"
    input.className = "input";
    input.id = "street";
    input.style.display = 'none';
    document.body.append(input);

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "house";
    input.className = "input";
    input.id = "house";
    input.style.display = 'none';
    document.body.append(input);

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "first name";
    input.className = "input";
    input.id = "fname";
    input.style.display = 'block';
    document.body.append(input);

    var input = document.createElement("input");
    input.type = "number";
    input.placeholder = "age";
    input.className = "input";
    input.id = "age";
    input.style.display = 'block';
    document.body.append(input);

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "last name";
    input.className = "input";
    input.id = "lname";
    input.style.display = 'block';
    document.body.append(input);
    document.getElementById('push').addEventListener('click', sozdatDva);

}

var human;

function sozdatDva() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = document.getElementById('age').value;
    let registration = false;
    human = new Citizen(fname, lname, age, registration);
    console.log(human.printOut());
    document.getElementById('fname').style.display = 'none';
    document.getElementById('lname').style.display = 'none';
    document.getElementById('age').style.display = 'none';
    document.getElementById('country').style.display = 'block';
    document.getElementById('city').style.display = 'block';
    document.getElementById('street').style.display = 'block';
    document.getElementById('house').style.display = 'block';
    document.getElementById('reg').style.display = 'block';
    document.getElementById('divCitizen').style.display = 'none';
}

function sozdatTri() {
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let street = document.getElementById('street').value;
    let house = document.getElementById('house').value;
    let c = new Address(country, city, street, house);
    console.log(c.printOut());
    console.log(human.printOut());
    console.log(human.register(country, city, street, house));
    console.log(human.printOut() + c.printOut());
    alert('Thanks! Сitizen registered');
    console.log(new Citizen)

}