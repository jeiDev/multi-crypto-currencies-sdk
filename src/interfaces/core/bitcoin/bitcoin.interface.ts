import { ProviderResponseI } from "../../providers/base/base.interface"

export interface BitcoinBaseResponseI  extends ProviderResponseI{}

export interface ErrorBitcoinBaseResponseI {
    code: number
    message: string
}


// result: {
//     name: 'test5',
//     warning: 'Empty string given as passphrase, wallet will not be encrypted.'
//   },
//   error: null,
//   id: 'curltest'