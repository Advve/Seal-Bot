module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (interaction.channel === null) {
			console.log(`${interaction.user.tag} created interaction in Direct Message or somwhere without a channel name.`);
		}
		else {
			console.log(`${interaction.user.tag} created interaction in #${interaction.channel.name}.`);
		}
	},
};