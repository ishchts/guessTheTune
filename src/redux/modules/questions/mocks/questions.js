/*
export const questions = [
	{
		type: 'genre',
		title: 'Выберите поп треки',
		question: 'Угадайте Жанр',
		rightAnswer: 'pop-music',
		answers: [
			{
				src: 'sounds/Typan-luna-doesnot-know-the-way.mp3',
				genre: 'pop-music',
			},
			{
				src: 'sounds/boom-box-janitors.mp3',
				genre: 'rap',
			},
			{
				src: 'sounds/Typan-luna-doesnot-know-the-way.mp3',
				genre: 'pop-music',
			},
		],
	},
	{
		type: 'artist',
		title: 'Угадайте Артиста',
		question: {
			src: 'sounds/Typan-luna-doesnot-know-the-way.mp3',
			genre: 'pop-music',
		},
		rightAnswer: 'bi2',
		answers: [
			{
				src: 'img',
				artist: 'bi2',
			},
			{
				src: 'img',
				artist: 'bilan',
			}
		],
	}
];

*/

const questions = [
    {
       "type":"genre",
       "genre":"electronic",
       "answers":[
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Weak_Knight.mp3",
             "genre":"electronic"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Clean_Break.mp3",
             "genre":"electronic"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Azure.mp3",
             "genre":"electronic"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Mob_Battle.mp3",
             "genre":"alternative"
          }
       ]
    },
    {
       "type":"artist",
       "song":{
          "artist":"Jingle Punks",
          "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dub_Spirit.mp3"
       },
       "answers":[
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/The_Whole_Other.jpg",
             "artist":"The Whole Other"
          },
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Jingle_Punks.jpg",
             "artist":"Jingle Punks"
          },
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Freedom_Trail_Studio.jpg",
             "artist":"Freedom Trail Studio"
          }
       ]
    },
    {
       "type":"genre",
       "genre":"reggae",
       "answers":[
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Nothin_Yet.mp3",
             "genre":"alternative"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Blue_Whale.mp3",
             "genre":"alternative"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dub_Spirit.mp3",
             "genre":"reggae"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Memories_Station_of_Tomorrow.mp3",
             "genre":"alternative"
          }
       ]
    },
    {
       "type":"artist",
       "song":{
          "artist":"John Deley and the 41 Players",
          "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Bark.mp3"
       },
       "answers":[
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/The_Whole_Other.jpg",
             "artist":"The Whole Other"
          },
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/John_Deley_and_the_41_Players.jpg",
             "artist":"John Deley and the 41 Players"
          },
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Endless_Love.jpg",
             "artist":"Endless Love"
          }
       ]
    },
    {
       "type":"genre",
       "genre":"country",
       "answers":[
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dirty_Mac.mp3",
             "genre":"country"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Parkside.mp3",
             "genre":"country"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Addis_Ababa.mp3",
             "genre":"reggae"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Blue_Whale.mp3",
             "genre":"alternative"
          }
       ]
    },
    {
       "type":"artist",
       "song":{
          "artist":"Quincas Moreira",
          "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Blue_Whale.mp3"
       },
       "answers":[
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/The_Whole_Other.jpg",
             "artist":"The Whole Other"
          },
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Quincas_Moreira.jpg",
             "artist":"Quincas Moreira"
          },
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/John_Deley_and_the_41_Players.jpg",
             "artist":"John Deley and the 41 Players"
          }
       ]
    },
    {
       "type":"genre",
       "genre":"country",
       "answers":[
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dub_Spirit.mp3",
             "genre":"reggae"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Whaling_City.mp3",
             "genre":"country"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dirty_Mac.mp3",
             "genre":"country"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Clean_Break.mp3",
             "genre":"electronic"
          }
       ]
    },
    {
       "type":"artist",
       "song":{
          "artist":"Dan Lebowitz",
          "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Parkside.mp3"
       },
       "answers":[
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Dan_Lebowitz.jpg",
             "artist":"Dan Lebowitz"
          },
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Jesse_Gallagher.jpg",
             "artist":"Jesse Gallagher"
          },
          {
             "picture":"https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Silent_Partner.jpg",
             "artist":"Silent Partner"
          }
       ]
    },
    {
       "type":"genre",
       "genre":"alternative",
       "answers":[
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Skanada.mp3",
             "genre":"reggae"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Parkside.mp3",
             "genre":"country"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Mob_Battle.mp3",
             "genre":"alternative"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dirty_Mac.mp3",
             "genre":"country"
          }
       ]
    },
    {
       "type":"genre",
       "genre":"electronic",
       "answers":[
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Azure.mp3",
             "genre":"electronic"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Clean_Break.mp3",
             "genre":"electronic"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Skanada.mp3",
             "genre":"reggae"
          },
          {
             "src":"https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Weak_Knight.mp3",
             "genre":"electronic"
          }
       ]
    }
];


export default questions;


