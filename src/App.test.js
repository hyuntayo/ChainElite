// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainElite title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainElite/i);
    expect(titleElement).toBeInTheDocument();
});
