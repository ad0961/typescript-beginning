let func : (a:number, b:number) => void
func = (num1:number, num2:number) => {
    console.log(num1+num2)
}

let func1 : (a:number, b:number, c:string) => number
func1 = (num1:number, num2:number, action:string) => {
 if(action==="add"){
    return num1+num2
 }else{
    return num1-num2
 }
}

let func2 : (obj:{name : string, age:number}) => void
type person = {name : string, age:number}
func2= (userObj : person) => {
    console.log(`${userObj.name} is ${userObj.age} years old`);
}