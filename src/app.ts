//enums are used to specify detailed constants and then mapping them to subsequent numeric values

enum resourcetype {
    BOOKS,
    PERSON,
    VIDEO
}

const obj = {
    name:"Ad",
    resourcetype : resourcetype.BOOKS
}

console.log(obj)

//tuples : tuples are same as array the only difference is for each posiiton in array a datatype is defined.

let arr = ["name", 20, "IT department"]
arr[0] = 50

let tup : [string, number, string] = ["name", 20, "IT department"]
//tup[0] = 20
tup[0] = 'Adi'