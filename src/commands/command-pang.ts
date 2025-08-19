import {SlashCommandBuilder} from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pang')
        .setDescription('Replies with Pong!'),
    async execute(interaction:any) {
        await interaction.reply('Pung!');
    }
};