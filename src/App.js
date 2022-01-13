import React, { useEffect, useState } from 'react';
import './App.css';

const getUser = () => Promise.resolve ({id: 1, name: 'Andria'})

const Search = ({value, onChange, children}) => (
	<div>
		<label htmlFor="search">{children}</label>
		<input type="text" id="search" placeholder="search text..."  value={value} onChange={onChange} />
	</div>
);

const App = () => {
	const [searсh, setSearch] = useState ("");
	const [user, setUser] = useState ("");

	useEffect (() => {
		const loadUser = async () => {
			const user = await getUser ();
			setUser (user);
		};
		loadUser ();
	}, []);

	const handleChange = ({target}) => {
		setSearch (target.value);
	}

	return (
		<div>
			{user && <h2>Logged in as {user.name}</h2>}
			<img src="" className="image" alt="search image" />
			<Search value={searсh} onChange={handleChange}>
				Search:
			</Search>
			<p>Searches for {searсh ? searсh : "..."}</p>
		</div>
	);
};

export default App;
