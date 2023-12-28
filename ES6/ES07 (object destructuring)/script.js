// Object Destructuring
const address = {
    street: '',
    city: '',
    country: ''
}

const { street, city, country} = address;
// caso queira mudar o nome
const {street: st} = address;

// equivalente a

const _street = address.street;
const _city = address.city;
const _country = address.country;