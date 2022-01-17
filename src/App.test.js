import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import App from './App';

describe("App", () => {
	test('render App component', async () => {
		render(<App />);
		await screen.findByText(/Logged in as/i)
		expect(screen.queryByText(/Searches for React/)).toBeNull();
		screen.debug();
		// fireEvent.change(screen.getByRole('textbox'), {
		// 	target: { value: "React" },
		// });
		userEvent.type(screen.getByRole("textbox"), "React")
		expect(screen.queryByText(/Searches for React/)).toBeInTheDocument();
	})
});

describe("events", () => {
	it("checkbox click", () => {
		const handleChange = jest.fn();
		const { container } = render(<input type="checkbox" onChange={handleChange} />)
		const checkbox = container.firstChild;
		// fireEvent.click(checkbox);
		userEvent.click(checkbox);
		userEvent.click(checkbox, {ctrlKey: true, shiftKey: true});
		expect(checkbox).toBeChecked();
	});

	it("double click", () => {
		const onChange = jest.fn();
		const { container } = render(<input type="checkbox" onChange={handleChange} />)
		const checkbox = container.firstChild;
		expect(checkbox).not.toBeChecked();
		userEvent.dbclick(checkbox);
		expect(onChange).toHaveBeenCalledTimes(2);
	});
});
