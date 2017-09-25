let computers = [
    { model: 'Mac', ram: 4 },
    { model: 'Dell', ram: 2 },
    { model: 'Avell', ram: 8 },
    { model: 'Acer', ram: 16 },
    { model: 'HP', ram: 1 },
    { model: 'Sony', ram: 0.5 },
]

let canAllComputersRun = computers.every((pc)=>pc.ram >= 4)
console.log(canAllComputersRun)

let canSomeComputerRun = computers.some((pc)=>pc.ram >=4)
console.log(canSomeComputerRun)