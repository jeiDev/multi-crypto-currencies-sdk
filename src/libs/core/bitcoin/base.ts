import { AxiosRequestConfig } from "axios";
// import { ProviderResponseI } from "../../interfaces/lib/bitcoin/bitcoin.interface";
import Base from "../../../providers/base";
import _config from "../../../config";
import { BitcoinBaseResponseI } from "../../../interfaces/core/bitcoin/bitcoin.interface";

class BitcoinBase extends Base {
    private readonly defaultData: Object;

    constructor(api: string, defaultData: Object, token: string){
        super(api, {}, {
            'Content-Type': 'application/json',
            'X-Auth-Token': token
        }, true)
        this.defaultData = defaultData;
    }
    
    protected async _post(path: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<BitcoinBaseResponseI>{
        const resp = await this.post(path, {
            ...data,
            ...this.defaultData
        }, config);
        if(resp.error) return Promise.resolve({data: null, error: resp.error?.error || resp.error});
        return Promise.resolve({data: resp.data.result, error: null});
    }

}

export default BitcoinBase;