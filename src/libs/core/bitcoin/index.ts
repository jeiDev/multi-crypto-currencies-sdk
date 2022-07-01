import Wallet from "./wallet";

class Bitcoin{
    protected readonly wallet: Wallet;

    constructor(api: string, defaultData: Object, token: string){
       this.wallet = new Wallet(api, defaultData, token)
    }
    
}

export default Bitcoin;