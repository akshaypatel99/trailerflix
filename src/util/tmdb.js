const API_KEY = '653c477d23ad1a02863f9000bee83a2a';

const requests = [
	{
		title: 'NETFLIX ORIGINALS',
		fetchUrl: `/trending/all/week?api_key=${API_KEY}`,
	},
	{
		title: 'Trending Now',
		fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	},
	{
		title: 'Now Playing in Cinemas',
		fetchUrl: `/movie/now_playing?api_key=${API_KEY}`,
	},
	{
		title: 'Top 20 Films in UK',
		fetchUrl: `/movie/popular?api_key=${API_KEY}&region=GB`,
	},
	{
		title: 'Action',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	{
		title: 'Animation',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	{
		title: 'Comedy',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	{
		title: 'Crime',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
	},
	{
		title: 'Documentary',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	},
	{
		title: 'Drama',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
	},
	{
		title: 'Family',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
	},
	{
		title: 'History',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
	},
	{
		title: 'Horror',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	{
		title: 'Romance',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	{
		title: 'Science Fiction',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	{
		title: 'Thriller',
		fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
	},
];

export default requests;
