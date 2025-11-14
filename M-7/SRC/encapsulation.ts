// encapsulation

class BankAccount {
    // readonly userId: number;
    public userId: number;
    public userName: string;
    // private userBalance: number;
    protected _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

   
    // protected addBalance(balance: number) {
    // addBalance(balance: number) { 
    private addBalance(balance: number) {
        this._userBalance = this._userBalance + balance;
    }

    callHiddenMethod(balance: number) {
        this.addBalance(balance)
    }
}

class studentBankAccount extends BankAccount {
    test() {
        this._userBalance
    }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

mezbaBhaiAccount.callHiddenMethod