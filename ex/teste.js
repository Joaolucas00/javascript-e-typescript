var number = [4, 2, 6, 1, 3]
number.sort((a, b) => {
    console.log('a: ', a);
    console.log('b: ', b);
    return b - a
})

console.log(number);