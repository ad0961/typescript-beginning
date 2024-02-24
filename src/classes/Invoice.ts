export class Invoice {
    // client : string;
    // amount: number;
    // details: string;

    // constructor(c : string, a:number, d:string){
    //     this.client = c;
    //     this.amount = a;
    //     this.details = d;
    // }

    constructor(
        public client : string, 
        private amount : number, 
        readonly details : string
    ){}

    format(){
        return `${this.client} owes rupees${this.amount} for ${this.details}`
    }
}