export class Customer {
 
    public policyNo: string;
    public policyOwner: string;
    public proposedInsured: string;
    public paymentMode: string;
    public dueDate: string;
    public methodOfPayment: string;
    public premium: string;
    public ccLast4digits?: string;

    constructor(policyNo: string = "", policyOwner: string = "", proposedInsured: string = "", paymentMode: string = ""
        , dueDate: string = "", methodOfPayment: string = "", premium: string = "", ccLast4digits: string = "") {
            this.ccLast4digits = ccLast4digits;
            this.dueDate = dueDate;
            this.methodOfPayment = methodOfPayment;
            this.paymentMode = paymentMode;
            this.policyNo = policyNo;
            this.policyOwner = policyOwner;
            this.premium = premium;
            this.proposedInsured = proposedInsured;
    }

}