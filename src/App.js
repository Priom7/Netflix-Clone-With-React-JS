import React from 'react';
import Row from './Row';
import requestApi from './requestApi';

import './App.css';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className='app'>
			<Nav />
			<Banner />
			<Row title='NETFLIX ORIGINALS' fetchUrl={requestApi.fetchNetflixOriginals} isLargeRow />
			<Row title='Trending Now' fetchUrl={requestApi.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requestApi.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requestApi.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requestApi.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requestApi.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requestApi.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requestApi.fetchDocumentaries} />
		</div>
	);
}

export default App;
