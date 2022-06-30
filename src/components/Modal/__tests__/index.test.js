import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        expect(asFragment()).toMatchSnapshot()
    });
});