import axios from './axios';

export const rowOpts = {
	height: '390',
	width: '100%',
	playerVars: {
		autoplay: 1,
	},
};

export const showCaseOpts = {
	height: '390',
	width: '640',
	playerVars: {
		autoplay: 1,
	},
};

export const getTrailer = (movie) => {
	console.log(movie);
	if (movie?.media_type === 'tv' || movie?.id < 120000) {
		async function fetchTvTrailer() {
			const response = await axios.get(
				`/tv/${movie?.id}/videos?api_key=653c477d23ad1a02863f9000bee83a2a&language=en-US`
			);
			console.log(response);
			const found = response.data.results.find(
				(element) => element.type === 'Trailer'
			);
			const key = found.key;
			return key;
		}
		return fetchTvTrailer();
	} else {
		async function fetchMovieTrailer() {
			const response = await axios.get(
				`/movie/${movie?.id}/videos?api_key=653c477d23ad1a02863f9000bee83a2a&language=en-US`
			);
			console.log(response);
			const found = response.data.results.find(
				(element) => element.type === 'Trailer'
			);
			const key = found.key;
			return key;
		}
		return fetchMovieTrailer();
	}
};
