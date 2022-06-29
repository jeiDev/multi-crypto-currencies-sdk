import Wallet from "./wallet";

class Bitcoin{
    public readonly wallet: Wallet;

    constructor(api: string, defaultData: Object, token: string){
       this.wallet = new Wallet(api, defaultData, token)
    }
    
}

export default Bitcoin;