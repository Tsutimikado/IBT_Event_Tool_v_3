import $api from "./AxiosInstanse";
import { AxiosResponse } from "axios";


export default class AuthService {
    static async login(username, password) {
        return $api.post('/auth/login', {username, password})
        
    }

    static async logout() {
        return $api.post('/auth/logout')
        
    }

    static async register(username, password){
        return $api.post('auth/register/get-account-info', {username, password})
    }
}