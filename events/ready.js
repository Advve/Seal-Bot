module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const activities = [
			'Use "/" to access command list!',
			'🐟Spining...',
		];

		setInterval(() => {
			const status = activities[Math.floor(Math.random() * activities.length)];
			client.user.setPresence({ activities: [{ name: `${status}` }] });
		}, 15000);

		client.on('guildMemberAdd', member => {
			const role = member.guild.roles.cache.find(r => r.id === process.env.DEFAULTROLEID);
			member.roles.add(role);

			console.log('User ' + member.user.username + ' joined the server! Assigning default role!');
		});

		client.on('voiceStateUpdate', (oldState, newState) => {
			const newChannel = newState.channelId;
			const afkVoiceChannel = process.env.AFKCHANNELID;
			const stageChannel = process.env.STAGECHANNELID;
			if (newChannel === afkVoiceChannel) {
				newState.setChannel(stageChannel);
				// console.log('afk');
			}

		});
		console.log(`Logged in as ${client.user.tag}!`);

	},
};