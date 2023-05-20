// @ts-nocheck
import axios from "axios";
import { user } from "../stores";

export const churchviewService = {
    baseUrl: "http://localhost:3000",

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                console.log(response.data.id);
                user.set({
                    email: email,
                    token: response.data.token,
                    id: response.data.id,
                });
                localStorage.churchview = JSON.stringify({ email: email, token: response.data.token, id: response.data.id });
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        user.set({
            email:"",
            token:"",
            id:"",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("churchview");
    },

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },


    reload() {
        const churchviewCredentials = localStorage.churchview;
        if (churchviewCredentials) {
            const savedUser = JSON.parse(churchviewCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token,
                id: savedUser.id,
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },

    async createDenomination(denomination){
        try {
            const response = await axios.post(this.baseUrl + "/api/denominations" , denomination);
            return response.status == 201;
        } catch (error) {
            return false;
        }
    },

    async getChurches(){
        try{
            const response = await axios.get(this.baseUrl + "/api/churches");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getDenominations(){
        try{
            const response = await axios.get(this.baseUrl + "/api/denominations");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getUsers(){
        try{
            const response = await axios.get(this.baseUrl + "/api/users");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async createChurch(id, church ){
        try{
            const response = await axios.post (this.baseUrl +"/api/denominations/" + id + "/churches" , church);
            return response.status == 201;
        } catch (error) {
            return false;
        }
    }
};
