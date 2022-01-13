import React, {useState} from 'react';
import './App.css';

const Search = ({ value, onChange, children }) => (
	<div>
		<label htmlFor="search">{children}</label>
		<input type="text" id="search" placeholder="search text..." value={value} onChange={onChange} />
	</div>
);

const App = () => {
	const [searсh, setSearch] = useState("");

	const handleChange = ({target}) => {
		setSearch(target.value);
	}

	return (
		<div>
			<img src="" alt="search image" />
			<Search value={searсh} onChange={handleChange}>
				Search:
			</Search>
		<p>Searches for {searсh ? searсh : "..."}</p>
		</div>
	);
};

export default App;
