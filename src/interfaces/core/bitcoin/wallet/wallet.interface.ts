import { ErrorBitcoinBaseResponseI } from "../bitcoin.interface"
import { TypeNewAddressWalletBitcoinEnum } from "./wallet.enum"
import { EstimateModeOptionBumpFeeWalletBitcoinType } from "./wallet.type"

export interface CreateWalletBitcoinI{
    name: string
    disabledPrivateKey?: boolean
    isBlank?: boolean
    passphrase?: string
    avoidReuse?: boolean
    descriptors?: boolean
    loadOnStartup?: boolean
    externalSigner?: boolean         
}

export interface NewAddressWalletBitcoinI{
    nameWallet: string
    addressType?: TypeNewAddressWalletBitcoinEnum
}

export interface LoadWalletBitcoinI{
    nameWallet: string
    loadOnStartup?: boolean
}

export interface OptionBumpFeeWalletBitcoinI{
    confTarget?: number
    feeRate?: number
    replaceable?: boolean
    estimateMode?: EstimateModeOptionBumpFeeWalletBitcoinType
}

export interface DataCreateWalletResponseI{
    name: string
    warning: string
}

export interface CreateWalletResponseI{
    data: DataCreateWalletResponseI
    error: ErrorBitcoinBaseResponseI
}

export interface GetNewAddressWalletResponseI{
    data: string
    error: ErrorBitcoinBaseResponseI
}

