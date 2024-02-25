import { HasFormatter } from "../interfaces/HasFormatter"

export class Invoice implements HasFormatter {
    constructor(
        public client : string, 
        private amount : number, 
        readonly details : string
    ){}

    format(){
        return `${this.client} owes rupees${this.amount} for ${this.details}`
    }

    // nonFormat(){
    //     console.log("yo")
    // }
}