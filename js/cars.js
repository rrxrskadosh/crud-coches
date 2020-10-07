//Arrays CARS

/*
--ID
--MODEL (manufacturer)
--COLOR
--YEAR
--PRICE

*/
const cars = [
    {
        id: 1,
        manufacturer: 'Mercedes-Benz',
        model: 'EQC',
        color: 'Wine',
        year: '2020',
        price: 75000, 
        
    },
    {
        id: 2,
        manufacturer: 'Audi',
        model: 'Q1',
        color: 'White',
        year: '2021',
        price: 68000,
        
    },
    {
        id: 3,
        manufacturer: 'Alfa Romeo',
        model: 'Tonale',
        color: 'Red Dark',
        year: '2020',
        price: 35000, 
        
    },
    {
        id: 4,
        manufacturer: 'BMW',
        model: 'M4',
        color: 'Red',
        year: '2021',
        price: 55000, 
        
    },
    {
        id: 5,
        manufacturer: 'BMW',
        model: 'iNext',
        color: 'Gold',
        year: '2019',
        price: 75000, 
        
    },

    {
        id: 6,
        manufacturer: 'Cadillac',
        model: 'CT5-V Blackwing',
        color: 'Black',
        year: '2020',
        price: 90000,
        
    },
    {
        id: 7,
        manufacturer: 'Honda',
        model: 'Insight',
        color: 'Yellow',
        year: '2019',
        price:  30500,
        
    },
    {
        id: 8,
        manufacturer: 'Jaguar',
        model: 'I-Pace',
        color: 'White',
        year: '2018',
        price:  20300,
        
    },
    {
        id: 9,
        manufacturer: 'Acura',
        model: 'RDX',
        color: 'Green',
        year: '2019',
        price:  55000,
        
    },
    {
        id: 10,
        manufacturer: 'DS',
        model: 'Crossback',
        color: 'Red',
        year: '2019',
        price:  28000,
        
    },
    {
        id: 11,
        manufacturer: 'Kia',
        model: 'Stinger',
        color: 'Grey',
        year: '2019',
        price:  32000,
        
    },
    {
        id: 12,
        manufacturer: 'Cadillac',
        model: 'Escala',
        color: 'Black',
        year: '2021',
        price:  45000,
        
    },
    {
        id: 13,
        manufacturer: 'Cadillac',
        model: 'Escalade',
        color: 'White',
        year: '2021',
        price:  80000,
        
    },
    {
        id: 14,
        manufacturer: 'Audi',
        model: 'E-Tron',
        color: 'Black',
        year: '2021',
        price:  100300,
        
    },
    {
        id: 15,
        manufacturer: 'Ford',
        model: 'Bronco',
        color: 'White',
        year: '2021',
        price: 45300,
        
    },

    {
        id: 16,
        manufacturer: 'Ford',
        model: 'F-150',
        color: 'Black',
        year: '2021',
        price: 32500,
        
    },
    {
        id: 17,
        manufacturer: 'Ford',
        model: 'Mustang Mach E-Tach',
        color: 'Light Blue',
        year: '2021',
        price:  60500,
        
    },
    {
        id: 18,
        manufacturer: 'Mazda',
        model: 'C-X5',
        color: 'Red',
        year: '2017',
        price:  17000,
        
    },
    {
        id: 19,
        manufacturer: 'Ford',
        model: 'EcoSport',
        color: 'Brown',
        year: '2017',
        price:  45900,
        
    },
    {
        id: 20,
        manufacturer: 'Jeep',
        model: 'Renegade',
        color: 'Saphire',
        year: '2019',
        price:  48300,
        
    },
    {
        id: 21,
        manufacturer: 'Kia',
        model: 'Soul',
        color: 'Dark Blue',
        year: '2018',
        price:  20000,
        
    },
    {
        id: 22,
        manufacturer: 'Ford',
        model: 'F-150',
        color: 'Blue Sky',
        year: '2017',
        price:  50000,
        
    },
    {
        id: 23,
        manufacturer: 'Ferrari',
        model: 'PuraSangue',
        color: 'Red',
        year: '2021',
        price:  524000,
        
    },
    {
        id: 24,
        manufacturer: 'Mercedes',
        model: 'EQC',
        color: 'Green',
        year: '2019',
        price:  65000,
        
    },
    {
        id: 25,
        manufacturer: 'Nissan',
        model: 'Juqque',
        color: 'Platinum',
        year: '2019',
        price: 77000, 
        
    },

    {
        id: 26,
        manufacturer: 'Genesis',
        model: 'Essentia',
        color: 'Black / Grey',
        year: '2021',
        price:  104000,
        
    },
    {
        id: 27,
        manufacturer: 'Hyundai',
        model: 'Tucson',
        color: 'Purple',
        year: '2021',
        price:  25290,
        
    },
    {
        id: 28,
        manufacturer: 'Jaguar',
        model: 'I-Pace SVR',
        color: 'Steel Grey',
        year: '2021',
        price:  46000,
        
    },
    {
        id: 29,
        manufacturer: 'Jeep',
        model: 'Gladiator',
        color: 'White',
        year: '2021',
        price: 45000, 
        
    },
    {
        id: 30,
        manufacturer: 'Bugatti',
        model: 'Chiron',
        color: 'Black',
        year: '2020',
        price: 3000000, 
        
    },
];

let editingCar = false;

function printCars() {

    const tableBody = document.getElementById('cars-table-body')
    tableBody.innerHTML = ''
    cars.forEach((car) => {
        const td = `<tr>
                        <td>${car.manufacturer}</td>
                        <td>${car.model}</td>
                        <td>${car.color}</td>
                        <td>${car.year}</td>
                        <td>${car.price}</td>
                        <td>
                            <button class="btn btn-danger" onclick="removeCar(${car.id})">
                                Delete
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick="editCarButton(${car.id})">
                                Edit
                            </button>
                        </td>
                        
                    </tr>`
        tableBody.innerHTML += td;
    })
}

//SUBMIT CARS
function submitCar() {
    console.log(editingCar)
    if(editingCar) {
        editCar();
    } else {
        addCar();
    }
}

function editCar() {
    const manufacturer = document.getElementById('manufacturer').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    editingCar.manufacturer = manufacturer,
    editingCar.model = model,
    editingCar.color = color,
    editingCar.year = year,
    editingCar.price = price
    
    printCars();

    editingCar = false;
    document.getElementById('manufacturer').value = '',
    document.getElementById('model').value = '',
    document.getElementById('color').value = '',
    document.getElementById('year').value = '',
    document.getElementById('price').value = ''
    
}

//EDIT CAR BUTTON
function editCarButton(id) {
    const car = cars.find((car) => car.id === id);
    
    document.getElementById('manufacturer').value = car.manufacturer;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;
    editingCar = car;
   
}

//ADD CAR

function addCar() {
    const manufacturer = document.getElementById('manufacturer').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
   
    const newCar = {
        id: cars.length + 1,
        manufacturer: manufacturer,
        model: model,
        color: color,
        year: year,
        price: price

    }
    
    cars.push(newCar);
    
    printCars();

}

//DELETE CAR

function removeCar(id) {
    const position = cars.findIndex((car) => car.id === id);
    cars.splice(position, 1);
    printCars();
}

printCars();