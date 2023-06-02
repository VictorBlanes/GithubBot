import { Client } from "discord.js";

const token: string = "MTExNDI4NTcyNjgzODgyMTAwNA.G98yJp.cA3glx7J-MAXZKURyl-bX1mIRu_5tHjS3QIHLc";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

console.log(client);