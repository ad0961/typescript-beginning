// const link = document.querySelector('a')
// console.log(link?.href)

// const link1 = document.querySelector('a')!
// console.log(link1.href)

const form = document.querySelector('form')!
console.log(form.children)

const form1 = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const from = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e : Event) => {
    e.preventDefault()
    console.log(type.value, from.value, details.value, amount.valueAsNumber)
})