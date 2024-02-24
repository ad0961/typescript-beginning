"use strict";
// const link = document.querySelector('a')
// console.log(link?.href)
// const link1 = document.querySelector('a')!
// console.log(link1.href)
const form = document.querySelector('form');
console.log(form.children);
const form1 = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const from = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, from.value, details.value, amount.valueAsNumber);
});
