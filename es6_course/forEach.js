Qvar colors = ['red', 'blue', 'green']
colors.forEach((color)=> console.log(color))

//---------------

var numbers = [1,2,3,4,5]
var sum = 0
numbers.forEach((number)=>{
    sum += number
})
console.log(sum)

//--------------

var images = [
    {h: 23, w:45},
    {h: 20, w:43},
    {h: 25, w:40},
]

var area = []

images.forEach((image)=>{
    area.push(image.h*image.w)
})

console.log(area)