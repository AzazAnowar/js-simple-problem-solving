const student ={
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friend: ['Apu','Raaz','Salman','aamir'],
    movies:[{name: 'no.1', year: 2015},{name: 'king khan', year: 2018}],
    car: {
        brand: 'tesla',
        price: 500000,
        made: 2025,
        meanufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
console.log(student);
console.log(student.friend);
console.log(student.car);
console.log(student.car.meanufacturer);
console.log(student.car.meanufacturer.ceo);