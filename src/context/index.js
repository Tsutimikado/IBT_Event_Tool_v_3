import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import axios from "axios";
import $api, { BASE_URL } from "../API/AxiosInstanse";

import AuthService from "../API/AuthService";
import { Navigate, useNavigate } from "react-router-dom";

export const RegisterStep = createContext(0);
export const WorkContext = createContext(true);
export const CookieContext = createContext(null);

export default class Store {
    isAuth = false;
    name = "test test";
    fullAccess = false;
    fullAccessGranted = ["Supervisor", "Admin"];
    isLoading = true;
    constructor(){
        makeAutoObservable(this);
        if(localStorage.getItem('access_token')){
            this.checkAuth()}
    }

    setAuth(bool){
        this.isAuth = bool;
    }

    setName(name){
        this.name = name;
    }

    setFullAccess(role){
        this.fullAccess = this.fullAccessGranted.includes(role);
    }

    setIsLoading(bool){
        this.isLoading = bool;
    }
    async login(username, password){
        // try{
            const response = await AuthService.login(username, password);
            // console.log(response);
            localStorage.setItem('access_token', response.data.access_token);
            this.setFullAccess(response.data.role);
            this.setName(response.data.name);
            this.setAuth(true);
            
        // } catch (e) {
        //     console.log("Throwing error");
            
        //     console.log("Throwed error");
        // }
    }

    async register(username, password, server_info){
        // try{
            const response = await AuthService.register(username, password, server_info);
            localStorage.setItem('access_token', response.data.access_token);
            this.setAuth(true);
            this.setFullAccess(response.data.role);
            this.setName(response.data.name);
            
        // }
        // catch(e){

        //     console.log(e);
        //     // return e;
        //     console.log("Throwed error");
        // // }
    }

    async logout(){
        try{
            const response = await AuthService.logout();
        } catch (e) {
            
        } finally {
            localStorage.removeItem('access_token');
            this.setAuth(false);
        }
    }

    async checkAuth(){
        try {
            const response = await $api.get('/auth/refresh');
            console.log(response.data);
            
            // localStorage.setItem('access_token', response.data.access_token);
            this.setFullAccess(response.data.role);
            this.setName(response.data.name);
            this.setAuth(true);
        } catch (e){
            // console.log(e);
        }
    }
}