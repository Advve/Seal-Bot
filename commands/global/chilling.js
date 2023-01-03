const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chilling')
		.setDescription('Wanna see me chilling? Try this then.'),

	async execute(interaction) {
		await interaction.deferReply();
		const interactionembed = new EmbedBuilder()
			.setTitle('Spining around...')
			.setImage('attachment://sealspin.gif')
			.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
			.setColor('#00ffff');

		interaction.editReply({ embeds: [interactionembed], files: ['./resources/sealspin.gif'] });
	},
};