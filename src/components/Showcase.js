import { useState, useEffect } from 'react';
import axios from '../util/axios';
import requests from '../util/tmdb';
import YouTube from 'react-youtube';
import { getTrailer, showCaseOpts } from '../util/youtube';
import './Showcase.css';

const Showcase = () => {
	const [movie, setMovie] = useState();
	const [trailerUrl, setTrailerUrl] = useState();

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(requests[0].fetchUrl);
			let random = Math.floor(Math.random() * response.data.results.length);
			setMovie(response.data.results[random]);
			return response;
		}
		fetchData();
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

	function shorten(text, max) {
		return text && text.length > max
			? text.slice(0, max).split(' ').slice(0, -1).join(' ').concat('...')
			: text;
	}

	return (
		<header
			className='Showcase'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
				backgroundPosition: 'center center',
			}}
		>
			<div className='Showcase__contents'>
				<div className='Showcase__text'>
					<h1 className='Showcase__title'>
						{movie?.title || movie?.name || movie?.original_name}
					</h1>

					<div className='Showcase__buttons'>
						<button
							className='Showcase__button'
							onClick={() => trailerHandler(movie)}
						>
							Play
						</button>
						<button className='Showcase__button'>More Info</button>
					</div>
					<p className='Showcase__description'>
						{shorten(movie?.overview, 200)}
					</p>
				</div>
			</div>

			<div className='Showcase__player'>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={showCaseOpts} />}
			</div>

			<div className='Showcase__fadeBottom' />
		</header>
	);
};

export default Showcase;
