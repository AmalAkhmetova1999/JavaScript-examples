import Address from "/class Address.js";

class Citizen {
    constructor(fname, lname, age, registration = false, address = null) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.registration = registration;
        this.address = address;

    }
    printOut() {
        return ("First Name: " + this.fname + "; " + "Last Name: " + this.lname + "; " + "Age: " + this.age + "; " + "Your registration: " + this.registration + " ")
    }


    //Если регистрация гражданина =false,
    //То зарегистрировать гражданина по адресу из Address
    //Создаем объект адрес из имеющихся данных
    //Присваиваем этому гражданину созданный адрес
    //Сделать registration true
    register(country, city, street, house) {
        if (this.registration == false) {
            let a = new Address(country, city, street, house);
            this.address = a;
            this.registration = true;

        }
    }
}

export default Citizen