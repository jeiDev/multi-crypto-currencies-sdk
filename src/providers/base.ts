import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { ProviderResponseI } from "../interfaces/providers/base/base.interface";

class Base {
    private readonly axios: AxiosInstance;
    private readonly activeStringify: boolean;

    constructor(api: string, config: AxiosRequestConfig = {}, headers: AxiosRequestHeaders = {}, activeStringify: boolean = false) {
        this.activeStringify = activeStringify;
        this.axios = axios.create({
            baseURL: api,
            withCredentials: false,
            headers: {
                ...headers
            },
            ...config
        });
    }

    private params(params: object){
       return Object.keys(params).map((key) => {
           //@ts-ignore
           let value = params[key];
           value = typeof value == typeof {} ? JSON.stringify(value) : value;
           return `${key}=${value}`;
       }).join("&");
    }

    protected get(path: string, params: object = {}, config: AxiosRequestConfig = {}): Promise<ProviderResponseI>{
        return new Promise((resolve) => {
            const _isParam = Object.keys(params).length > 0;
            this.axios.get(`${path}${_isParam ? `?${this.params(params)}` : ''}`, config)
            .then(response => resolve({data: response.data, error: null}))
            .catch(error => resolve({error: error.response?.data || error.response, data: null}));
        });
    }
    
    protected post(path: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<ProviderResponseI>{
        return new Promise((resolve) => {
            this.axios.post(path, this.activeStringify ? JSON.stringify(data) : data, config)
            .then(response => resolve({data: response.data, error: null}))
            .catch(error => resolve({error: error.response?.data || error.response, data: null}));
        });
    }

}

export default Base;