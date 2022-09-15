 class Address {
     constructor(country, city, street, house) {
         this.country = country;
         this.city = city;
         this.street = street;
         this.house = house;
     }
     printOut() {
         return ('Address:' + " " + this.country + " " + this.city + " " + this.street + " " + this.house)
     }
 }
 export default Address