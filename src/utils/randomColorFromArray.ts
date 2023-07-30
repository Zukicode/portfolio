const allColors = [
	'#00ADB5',
	'#FF2E63',
	'#112D4E',
	'#AA96DA',
	'#7D5A50',
	'#E84545',
	'#0D7377',
	'#f31124',
	'#1dd723',
	'#5137a5',
	'#d73377',
	'#ff5e00',
	'#770d0d',
	'#77007b',
	'#A4BE7B',
	'#a46f33',
	'#285430',
	'#2D4059',
	'#F07B3F',
	'#7D5A5A',
	'#FF9999',
	'#850E35',
	'#1E212D',
	'#27496D',
	'#FF165D',
	'#52057B',
	'#FFD369',
	'#950101',
];

export const randomColorFromArray = (): string =>
	allColors[Math.floor(Math.random() * allColors.length)];
