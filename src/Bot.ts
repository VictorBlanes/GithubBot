import {Client} from "discord.js";

export class Bot {
    public Bot() {
        // Add Token here
        const token: string = "";

        console.log("Bot is starting...");
        if(token.length === 0){
            console.log("Please enter a token before running the app.");
            return;
        }

        const client = new Client({
            intents: []
        });

        client.login(token);

        console.log(client);
    }
}