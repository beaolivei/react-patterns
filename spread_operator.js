let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]

let newArray = [...array1, ...array2]
// console.log('newArray', newArray)

let original_car = {
    brand: "Volksvagen",
    year: 2020,
    goodCondition: true,
    value: 20000
}

let new_car = {...original_car}
// console.log('new_car', new_car)
new_car.goodCondition = false

//console.log('original_car', original_car)
//console.log('new_car', new_car)


// ------------

// Deconstructing 

let {brand, year, goodCondition, value } = original_car
let [a,b, ...rest] = [10, 20, 6,8,9,10]

console.log('rest', rest)

