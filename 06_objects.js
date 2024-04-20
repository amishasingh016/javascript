//object literals

const mysym=Symbol("key1")
const obj1={
    name:"amisha",
    age:19,
    [mysym]:"key1",
    location:"chennai",
    email:"amisha@gmail.com"
}

console.log(obj1.email)

//preferred one
console.log(obj1["location"])
console.log(obj1[mysym])


//////////////

const course={
    name:"javascript",
    price:999,
    courseInstructor:"amisha"

}

const {courseInstructor:instructor}=course
console.log(instructor)