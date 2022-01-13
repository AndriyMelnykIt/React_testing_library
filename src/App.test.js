import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const {asFragment} = render(<App />);
//   expect( asFragment (<App />)).toMatchSnapshot();
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Різні типи вибора елемента

describe("App", () => {
	it ('render App component', () => {
		render(<App />);
		screen.debug();        //регулярний вираз - перевіряється часткове співпадіння ( i - означає не чутливе до регістру)
		expect(screen.getByText(/Search:/i)).toBeInTheDocument();
		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument();
		expect(screen.getByAltText('search image')).toBeInTheDocument();
	});
});
