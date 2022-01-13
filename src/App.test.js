import { render, screen } from '@testing-library/react';
import App from './App';

// Варіанти пошуку getBy, queryBy, findBy;

describe("App", () => {
	it ('render App component', async () => {
		render(<App />);
		// expect(screen.queryByText(/Search for React/i)).toBeNull();
		expect(screen.queryByText(/Logged in as/i)).toBeNull();
		screen.debug()
		expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
		screen.debug()

		expect( screen.getByAltText(/search image/i)).toHaveClass('image');
		expect( screen.getByLabelText(/search/i)).not.toBeRequired();
		expect( screen.getByLabelText(/search/i)).toBeEmptyDOMElement();
		expect( screen.getByLabelText(/search/i)).toHaveAttribute("id");
	});
});
