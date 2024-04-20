const myarr=[0,1,2,3,4]
myarr.push(5)
myarr.push(6)
myarr.pop()
console.log(myarr)
console.log(myarr.indexOf(2))

const newArr=myarr.join()
console.log(newArr)

console.log("A "+myarr.slice(1,3))

const myarr2=myarr.splice(1,3)
console.log("B "+myarr)
console.log(myarr2)


//array 02

const marvel_heros=['thor','ironman','spiderman']
const dc_heros=['superman','flash','batman']
const newheros=marvel_heros.concat(dc_heros)
console.log(newheros)

// spread concept
const all_new=[...dc_heros,...marvel_heros]
console.log(all_new)


//
const name="amisha"
console.log(Array.from(name))

