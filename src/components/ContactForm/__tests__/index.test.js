import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('header is visible', () => {
    it('insert text into the h2', () => {
        render(<ContactForm
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        expect(screen.getByTestId('contact')).toHaveTextContent('Contact me');
    });
});