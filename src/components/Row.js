import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../util/axios';

import './Row.css';
import { getTrailer, rowOpts } from '../util/youtube';

const Row = ({ title, fetchUrl }) => {
	const [movies, setMovies] = useState();
	const [trailerUrl, setTrailerUrl] = useState();

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(fetchUrl);
			setMovies(response.data.results);
			return response;
		}
		fetchData();
		console.log(movies);
	}, []);

	const trailerHandler = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			getTrailer(movie)
				.then((key) => setTrailerUrl(key))
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className='Row'>
			<div className='Row__title'>
				<h2>{title}</h2>
			</div>

			<div className='Row__container'>
				{movies?.map((movie) => (
					<img
						key={movie?.id}
						onClick={() => trailerHandler(movie)}
						className='Row__poster'
						src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
						alt={movie?.title}
					/>
				))}
			</div>

			{trailerUrl && <YouTube videoId={trailerUrl} opts={rowOpts} />}
		</div>
	);
};

export default Row;
