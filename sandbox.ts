//explicit types

let fname:string;
let age:number;
 //age = "luigi";
 age = 20;

 let uid: string | number;
 uid = 20;
 uid = "abc"
 //uid = true;

 //arrays
 let arr : number[] = []
 //arr.push(false);
 arr.push(20)

 let mixed : (number | string)[] =[]
 mixed.push(20)
mixed.push("luigi")
//mixed.push(true)

//objects

let obj1: object;
obj1 = {
    name:"Adi",
    age:20
}
obj1 = []

let obj2:{
    age:number,
    name:string
}
//obj2 = []
//obj2 = {age:20, name:"adi", skills:[]}