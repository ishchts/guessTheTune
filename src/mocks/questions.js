export const questions = [
	{
		type: "genre",
		title: "Выберите инди-рок треки",
		question: "Угадайте Жанр",
		rightAnswer: "pop-music",
		answers: [
			{
				src: "sounds/Typan-luna-doesnot-know-the-way.mp3",
				genre: "pop-music",
			},
			{
				src: "sounds/boom-box-janitors.mp3",
				genre: "rap",
			}
		],
	},
	
	
	{
		type: "artist",
		title: "Угадайте Артиста",
		rightAnswer: "bi2",
		answers: [
			{
				src: "img",
				artist: "bi2",
			},
			{
				src: "img",
				artist: "bilan",
			}
		],
	}
];


export const gameSettings = {
	possibleErrors: 2,
	timeline: 5,
};





