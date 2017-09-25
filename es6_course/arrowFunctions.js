const add = function (a,b) {
    return a + b
}
console.log(`Normal Function = ${add(1,3)}`)

console.log("----")

const add2 = (a,b) => a + b
console.log(`Arrow Function = ${add2(1,3)}`)

console.log("----")

const doubleR = number => 2 * number
console.log(`Ommit Parenteshis ${doubleR(2)}`)

console.log("----")

const numbers = [1,2,3,4,5]
const numbersDouble = numbers.map(number => number * 2)
console.log(numbersDouble)

console.log("----")

const team = {
    members: ['Jane', 'Bill', 'Guy'],
    teamName: 'Awesome Team',
    teamSummary: function () {
        return this.members.map(member => `${member} is on the team ${this.teamName}`)
    }
}
console.log(team.teamSummary())