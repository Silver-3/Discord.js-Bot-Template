const Discord = require('discord.js');

/**
 * 
 * @param {Discord.CommandInteraction} interaction 
 * @param {Discord.Client} client 
 */

module.exports.run = async (interaction, client) => {
    interaction.reply('Pong');
}

module.exports.command = new Discord.SlashCommandBuilder()
    .setName('ping')
    .setDescription('A test command')