let fun : Function;

//fun = "String";
fun = () => {
    console.log("woohoo")
}

const add = (a:number, b:number, c?:number):void => {
    console.log(a+b)
}

add(5,10)
add(3,4,5)

const sub = (a:number, b:number, c:number | string=2) => {
    console.log(a+b)
}
sub(2,1)
sub(5,2,1)

const mul = (a:number, b:number, c:number=2) : number => {
    return a*b*c;
}
let num = mul(3,4,5);

//type aliases

type numOrStr = number | string
type userObj = {
    name : string,
    uid : numOrStr
}

const greet = (user : userObj) => {
    console.log(`Hi there ${user.name}`)
}

const logDetails = (user : userObj) => {
    console.log(`Hi there ${user.uid}`)
}