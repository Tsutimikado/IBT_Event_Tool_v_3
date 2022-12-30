import { makeAutoObservable } from "mobx";
import { createContext } from "react";

import AuthService from "../API/AuthService";

export const AuthContext = createContext(null)
export const WorkContext = createContext(true)
export const CookieContext = createContext(null);

export default class Store {
    isAuth = false;


    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool){
        this.isAuth = bool;
    }

    async login(username, password){
        try{
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token',response.data.access_token);
            this.setAuth(true);
        } catch (e) {
            console.log(e.message);
        }
    }

    async registration(username, password){
        try{
            const response = await AuthService.registration(username, password);
            localStorage.setItem('token',response.data.access_token);
            this.setAuth(true);
        } catch (e) {
            console.log(e.message);
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e) {
            console.log(e.message);
        }
    }
}