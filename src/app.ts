const addUID = <T extends object>(userobj: T) => {
    const uid = Math.floor(Math.random()*100);
    return {...userobj, uid}
}

const user = addUID({name : 'abhi', age:20})
console.log(user.age)

//const user2 = addUID('hello')

interface Resource<T> {
    name: string,
    age: number,
    data: T
}

const docThree : Resource<number> = {
    name : 'ad',
    age:30,
    data:20
}

console.log(docThree)