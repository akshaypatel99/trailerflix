import './App.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Row from './components/Row';
import requests from './util/tmdb';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Showcase />
			{requests.map((req) => (
				<Row title={req.title} fetchUrl={req.fetchUrl} />
			))}
		</div>
	);
}

export default App;
