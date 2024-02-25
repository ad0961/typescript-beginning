import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let doc1 : HasFormatter;
let doc2 : HasFormatter;

doc1 = new Payment("Mario", 300, "Website work")
doc2 = new Invoice("Luigi", 200, "plumbing work")

let docs : HasFormatter[] = []
docs.push(doc1);
docs.push(doc2);

console.log(docs);