import { TypeNewAddressWalletBitcoinEnum } from "../../../interfaces/core/bitcoin/wallet/wallet.enum";
import { CreateWalletBitcoinI, CreateWalletResponseI, GetNewAddressWalletResponseI, LoadWalletBitcoinI, NewAddressWalletBitcoinI, OptionBumpFeeWalletBitcoinI } from "../../../interfaces/core/bitcoin/wallet/wallet.interface";
import BitcoinBase from "./base";

class Wallet extends BitcoinBase{
    constructor(api: string, defaultData: Object, token: string){
        super(api, defaultData, token)
    }

    public create(params: CreateWalletBitcoinI): Promise<CreateWalletResponseI>{
        return this._post("/", {
            method: "createwallet",
            params: [
                params.name, 
                params.disabledPrivateKey ? true : false, 
                params.isBlank || false, 
                params.passphrase || "", 
                params.avoidReuse || false,
                params.descriptors || false,
                params.loadOnStartup || false,
                params.externalSigner || false
            ]
        });
    }

    public getNewAddress(params: NewAddressWalletBitcoinI): Promise<GetNewAddressWalletResponseI>{
        return this._post(`/wallet/${params.nameWallet}`, {
            method: "getnewaddress",
            params: [params.nameWallet, params.addressType || TypeNewAddressWalletBitcoinEnum.P2SH_SEGWIT]
        });
    }

    public loadWallet(params: LoadWalletBitcoinI){
        return this._post("/", {
            method: "loadwallet",
            params: [params.nameWallet, params.loadOnStartup || false]
        });
    }

    public bumpFee(txId: string, options: OptionBumpFeeWalletBitcoinI = {}){
        return this._post("/", {
            method: "loadwallet",
            params: [txId, options]
        });
    }
}

export default Wallet;