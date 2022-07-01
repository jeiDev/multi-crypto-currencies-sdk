import { ObjectDynamic } from "../interfaces/general/general.interface";

export const replaceUrlString = (url: string, data: ObjectDynamic): string => {
    return Object.keys(data).reduce((store, key) => {
        store = store.replace(`{${key}}`, data[key]);
        return store;
    }, url)
}