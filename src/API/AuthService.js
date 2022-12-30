import $api from "./AxiosInstanse";
import { AxiosResponse } from "axios";


export default class AuthService {
    static async login(username, password) {
        return $api.post('/login', {username, password})
        
    }

    static async registration(username, password) {
        return $api.post('/registration', {username, password})
        
    }

    static async logout() {
        return $api.post('/logout')
        
    }
}