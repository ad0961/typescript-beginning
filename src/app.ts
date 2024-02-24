import { Invoice } from "./classes/Invoice.js"
const obj1 = new Invoice("Adi", 200, "Clothes")
const obj2 = new Invoice("Abhi", 300, "jewellery")

let Invoices : Invoice[] = []
Invoices.push(obj1)
Invoices.push(obj2)

console.log(Invoices)