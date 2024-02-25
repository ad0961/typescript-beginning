import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement
const from = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const ul = document.querySelector('ul')!;
const listItem = new ListTemplate(ul);

form.addEventListener('submit', (e : Event) => {
    e.preventDefault()
    let doc : HasFormatter;
    if(type.value === "invoice"){
        doc = new Invoice(from.value, amount.valueAsNumber, details.value)
    }else{
        doc = new Payment(from.value, amount.valueAsNumber, details.value)
    }
    listItem.render(doc, type.value, "end")
})