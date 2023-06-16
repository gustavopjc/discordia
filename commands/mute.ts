const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mute")
    .setDescription("mute a user"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
