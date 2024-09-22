import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";
//  classes in JavaScript provide a way to create objects with specific properties and methods.
//  The constructor method is used to initialize the object when it's created. 
//  The this keyword is used to refer to the current instance of the class, allowing access to its properties and methods.


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}) {
        try {
            console.log(this.account);
            const session = await this.account.createEmailPasswordSession(email,password);
            console.log(this.account);
            if (session) {
                // Handle successful login
                return session;
            } else {
                // Handle login failure
                throw new Error("Login failed.");
            }
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

