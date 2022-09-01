const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spinstop')
		.setDescription('Disconnects seal from the channel and stops playing spining seals.'),

	async execute(interaction) {
		const response = new EmbedBuilder()
			.setColor('#00ffff');

		if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
			response.setDescription('❌You do not have permission to manage channels and make the bot leave one!');
			interaction.reply({ embeds: [response] });
			return;
		}
		else {
			const guildId = process.env.GUILD_ID;
			const connection = getVoiceConnection(guildId);

			if (connection) {
				connection.destroy();
				response.setDescription('✅Successfully destroyed the connection!');
				interaction.reply({ embeds: [response] });
			}
			else {
				response.setDescription('❌Bot not connected!');
				interaction.reply({ embeds: [response] });
			}
		}
	},
};