const Discord = require('discord.js');

/**
 * 
 * @param {Discord.CommandInteraction} interaction 
 * @param {Discord.Client} client 
 */

module.exports.run = async (interaction, client) => {
    interaction.reply('Ping');
}

module.exports.command = new Discord.SlashCommandBuilder()
    .setName('pong')
    .setDescription('Another test command')