const arr = new Array()

const arr2 = new Array(true, "Gabriel", 28, new Array(2, 4, 10))
arr[0] = "Gabriel"
arr[1] = 40;
console.log(arr)
console.log(arr2[3][arr2[3].length - 1])

const arr3 = ["Gabriel", 40, [3, 6, 9], true]
arr3.push("adicionando com push")
console.log(arr3)
console.log(arr3[2])
console.log(arr3[2][0])