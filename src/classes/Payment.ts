import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter {
    constructor(
        public recepient : string, 
        private amount : number, 
        readonly details : string
    ){}

    format(){
        return `${this.recepient} is owed rupees${this.amount} for ${this.details}`
    }
}