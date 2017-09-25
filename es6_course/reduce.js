const numbers = [1, 2, 3, 4, 5]

const numbersReduced = numbers.reduce((acc,number)=>acc+number)
console.log(numbersReduced)

const colors = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' }
]

const colorsReduced = colors.reduce((previousColor, curr) => {
    previousColor.push(curr.color)
    return previousColor
}, [])

console.log(colorsReduced)

function balancedParens(string) {
    return !string.split('').reduce((prev, char) => {
        if (prev < 0) {
            return prev
        }
        if (char === '(') {
            return ++prev
        }
        if (char === ')') {
            return --prev
        }
        return prev
    }, 0)
}

console.log(balancedParens('())()()'))

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }]

var totalDistance = trips.reduce((acc,curr)=> acc + curr.distance, 0)
console.log(totalDistance)